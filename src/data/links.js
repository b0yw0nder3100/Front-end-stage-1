import UserProfile from "./profile"
/**
 * @type {Array<object>}
 * @property {name} name 
 */
const links = [
    {
        name: "Twitter Link"
    },
    {
        name: "Zuri Team",
        id: "btn__zuri",
        link: "https://training.zuri.team/"
    },
    {
        name: "Zuri Books",
        id: "books",
        link: "http://books.zuri.team"
    },
    {
        name: "Python Books",
        id: "book__python",
        link: `https://books.zuri.team/python-for-beginners?ref_id=<${UserProfile.slack_name}>`
    },
    {
        name: "Background Check for Coders",
        id: "pitch",
        link: "https://background.zuri.team/"
    },
    {
        name: "Design Books",
        id: "book__design",
        link: "https://books.zuri.team/design-rules"
    },
]

export default links