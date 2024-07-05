import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>About Us - Alumini Connect</title>
                <meta name="description" content="Learn more about us and what we do." />
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="max-w-4xl w-full px-6 py-12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto">
                    <div className="bg-gray-700 shadow-lg rounded-lg px-8 py-12 text-left">
                        <h1 className="text-white text-3xl font-semibold mb-4">About Us</h1>
                        <p className="leading-relaxed text-white">
                        This project is led by students from the Computer Science and Engineering department at Jawaharlal Nehru Technological University Hyderabad (JNTUH) as part of a real-time research initiative.
                        </p>
                        <p className="leading-relaxed mt-4 text-white">
                            Varun
                        </p>
                        <p className="leading-relaxed mt-4 text-white">
                            Sk Mastan
                        </p>
                        <p className="leading-relaxed mt-4 text-white">
                            Prudhvi
                        </p>
                        <p className="leading-relaxed mt-4 text-white">
                            Nithin
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;