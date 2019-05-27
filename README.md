# Minimilistic ReactJS Gutenberg Blocks

**The goal of this project** is to be able to generate an entire WordPress post created with Gutenberg, within a seperate React based frontend.

The frontend can either be a ReactJS App or [Gatsby](https://gatsbyjs.org/) Headless site.

## Prerequisites

In order for this to work we'll need to get the Gutenberg data as JSON from WP via REST.

The following code exposes a new field on posts and pages called `blocks`. It can be added either via a plugin or in your theme's `functions.php` file

```
<?php

add_action(
  'rest_api_init',
  function () {

    if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
      require ABSPATH . 'wp-admin/includes/post.php';
    }

    // Surface all Gutenberg blocks in the WordPress REST API
    $post_types = get_post_types_by_support( [ 'editor' ] );
    foreach ( $post_types as $post_type ) {
      if ( use_block_editor_for_post_type( $post_type ) ) {
        register_rest_field(
          $post_type,
          'blocks',
          [
            'get_callback' => function ( array $post ) {
              return parse_blocks( $post['content']['raw'] );
            },
          ]
        );
      }
    }
  }
);
```

## Usage

### ReactJS Example
```
import WPGBlocks from 'react-gutenberg'
…

  constructor(props) {
    super(props)

    const WP_URL = https://my-wordpess-site.com/wp-json/wp/v2/posts

    fetch(WP_URL)
      .then(response => response.json())
      .then(posts => {
        this.setState( { posts })
      })
  }

  render() {
    const { posts } = this.state

    if (!posts) return (
      <div>Loading...</div>
    )

    return (
      <div class="posts">
        { posts.map(post => (
          <div className="post" data-id={post.id}>
            <h2>{post.title.rendered}</h2>
            <WPGBlocks blocks={post.blocks} />
          </div>
        )) }
      </div>
    )
  }

…

```

### Gatsby Example

```
import * as React from "react"
import { graphql } from "gatsby"
import WPGBlocks from "react-gutenberg"
import { IBlock } from "react-gutenberg/src/types"

const Loading = () => (
  <div class="loading"></div>
)

interface IPost {
  wordpress_id: number
  id: number
  title: string
  blocks: IBlock[]
}

const Post: React.SFC<{data: IPost}> = ({ data }) => {
  const { id, title, blocks } = data

  return (
    <Layout>
      <article data-id={id}>
        <h2>{title}</h2>
        <WPGBlocks blocks={blocks} />
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  fragment WPPost on wordpress__POST{
      wordpress_id
      id
      title
      excerpt
      slug
      type
      date
      categories {
        name
        slug
      }
  }
  query PostById($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      ...WPPost
      blocks {
        blockName
        attrs {
          wordpress_id
          ids
        }
        innerBlocks {
          blockName
          attrs {
            align
          }
          innerHTML
        }
        innerHTML
      }
    }
  }
`
```

## Supported/Implemented WP Gutenberg Blocks

By default the raw `innerHTML` is used to render the block, however in some cases it is more beneficial that the block is built up in React for example the Gallery Block to support lightbox effect.

### Common Blocks

- [x] Paragraph
- [x] Image
- [x] Heading
- [x] Gallery
- [x] List
- [x] Quote
- [x] Audio
- [x] Cover
- [x] File
- [x] Video

### Formatting

- [x] Code
- [ ] Classic ! Raw html support only
- [x] Custom HTML ! Raw html support only
- [x] Preformatted
- [x] Pullquote
- [ ] Table
- [ ] Verse

### Layout Elements

- [ ] Button
- [ ] Columns
- [ ] Media & Text
- [ ] More
- [ ] Page Break
- [ ] Separator
- [ ] Spacer

### Widgets

- [ ] Shortcode ! Not to be implemented
- [ ] Archives
- [ ] Calendar
- [ ] Categories
- [ ] Latest Comments
- [ ] Latest Posts
- [ ] RSS
- [ ] Search
- [ ] Tag Cloud

### Embeds

- [ ] Embed
- [ ] Twitter
- [ ] Youtube
- [ ] Facebook
- [ ] Instagram
- [ ] Wordpress
- [ ] SoundCloud
- [ ] Spotify
- [ ] Flickr
- [ ] Vimeo

## Adding your own custom blocks

The main purpose of this library is to give you a easy way to add any custom blocks for your projects.

To do this you can **lazy import** all your custom blocks into one file say `mapToBlock.tsx`(typescript) or `mapToBlock.js` and then export one function as follows:

```
const Gallery = React.lazy(() => import('./coolGallery'))
const Banner = React.lazy(() => import('./banner'))

export function GetTheBlock(name: string) {
  switch (name) {
    case 'core/gallery': return Gallery
    case 'core/cover': return Banner
    defualt: return null
  }
}
```

Then wherever you use the `WPGBlocks` component send it the function `GetTheBlock` on the prop `mapToBlock`. The library will then first call your function before checking if it has a component.

Component Example: `<WPGBlocks blocks={blocks} mapToBlock={GetTheBlock} />


## Why?

For most people it might be fine just taking the raw html from the REST response; `content.rendered`, but I realized that some components I need to make more interactive.

This project hopefully gives a platform to parse the `blocks` property from a REST response and where needed custom and interactive blocks can be made **Reactive**.

# Contribute

This project is dependent on PR requests and the community.

Source is coded in [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) to enforce more understandable code.

Make sure to install TypeScript before trying to build `npm install -g typescript`

### Styling

The styles of each block is kept to a minimal and should work in both dark and light mode conditions.

Classes on blocks should conform to the [BEM](https://en.bem.info/methodology/naming-convention/) naming convention.

The following variables can be used but used sparingly

```
--dark-color: #111;
--light-color: #f3f3f3;
```