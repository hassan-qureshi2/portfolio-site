import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

const Technologies = ({ Tech, title }) => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                {title}
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4 ">
                {Tech?.map(({ icon, delay }, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(delay)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        {icon}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
