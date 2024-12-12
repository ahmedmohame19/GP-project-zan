import { useRef, useState } from 'react';
import './Question.scss';
import { FaAngleRight } from "react-icons/fa6";
import { useAnimate, motion, useInView } from "framer-motion";

export function Question({ number, title, desc, desc1, desc2, desc3, Delay }) {
    const ref = useRef()
    const InView = useInView(ref, { once: true });
    const [ShowQuestion, setShowQuestion] = useState(false);
    const [Show, animate] = useAnimate();

    const QuestionHandler = () => {
        setShowQuestion(ShowQuestion ? false : true);
        if (ShowQuestion) {
            animate(Show.current, {
                height: 0,
            }, { duration: 0.2 })
        } else {
            animate(Show.current, {
                height: 100,
            }, { duration: 0.2 })
        }
    }
    return (
        <motion.div className="Question mt-5" ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={InView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'linear', delay: parseFloat(Delay) }}
        >
            <h5 className={ShowQuestion ? 'Showing' : ''} onClick={QuestionHandler} ><span>{number}.</span>
                {title}
                <FaAngleRight className={ShowQuestion ? 'Main' : ''} /></h5>


            {desc && <span className={ShowQuestion ? 'Showing text-gray-600' : 'span-non'} ref={Show}>
                {desc}
            </span>
            }

        </motion.div>
    )
}