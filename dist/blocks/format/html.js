Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class WPGHtmlBlock extends React.Component {
    constructor() {
        super(...arguments);
        this.id = Math.floor(Math.random() * 100000);
    }
    componentDidMount() {
        document.querySelectorAll(`[data-script="${this.id}"]`).forEach(script => {
            window.eval(script.innerHTML);
        });
    }
    render() {
        const { attrs, innerBlocks, innerHTML } = this.props;
        const scriptHtml = innerHTML.replace(/<script(>|\s)/gm, `<script data-script="${this.id}"$1`);
        return (React.createElement("div", { className: "wpg-block wpg-b_html", dangerouslySetInnerHTML: { __html: scriptHtml } }));
    }
}
exports.default = WPGHtmlBlock;
//# sourceMappingURL=html.js.map