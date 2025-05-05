
// import feedback i nterface :
import IFeedback from "@/types/feedback.type";

const get_User_FeedbackList = ():IFeedback[] =>{
    let result: IFeedback[] = [
        {
            userName:"Jules Winnfield",
            psodo:"JW",
            starCount : 2,
            comment: "The customer service I received was exceptional. The support team went above and beyond to address my concerns.",
            title: "CEO, Acme Inc",
        },
        {
            userName:"Alice Johnson",
            psodo:"AJ",
            starCount : 3,
            comment: "The platform is intuitive and easy to use. It has streamlined our workflow and improved collaboration among our team members.",
            title: "Marketing Manager, XYZ Corp",
        },
        {
            userName:"David Smith",
            psodo:"DS",
            starCount : 5,
            comment: "I've been using the product for a few months now, and it has exceeded my expectations. The features are robust, and the interface is elegant and user-friendly.",
            title: "Freelance Designer",
        },
        {
            userName:"Diouri salah Eddine",
            psodo:"DS",
            starCount : 0,
            comment: "I've been using the product for a few months now, and it has exceeded my expectations. The features are robust, and the interface is elegant and user-friendly.",
            title: "Full-Stack Engineer",
        }
    ];
    return result;
};



export default get_User_FeedbackList;