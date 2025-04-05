import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const About = () => {
    const containerRef = useRef();
    const textRefs = useRef([]);
    const buttonRef = useRef();
    const bgRef = useRef();

    useEffect(() => {
        gsap.set(containerRef.current, { perspective: 1000 });
        gsap.set(textRefs.current, { opacity: 0, y: 50 });
        gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });

        gsap.fromTo(
            containerRef.current,
            { rotateX: -20, rotateY: -180, opacity: 0, scale: 0.9 },
            {
                rotateX: 0,
                rotateY: 0,
                opacity: 1,
                scale: 1,
                duration: 2.5,
                ease: "power3.out",
            }
        );

        gsap.to(textRefs.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5,
        });

        gsap.to(buttonRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: 1.5,
        });

        gsap.to(bgRef.current, {
            backgroundPosition: "50% 20%",
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <div
            ref={bgRef}
            className="min-h-screen  bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
        >
            <div
                ref={containerRef}
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 sm:p-12 lg:p-16 transform transition-all"
            >
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                    О компании
                </h2>
                <div className="space-y-6 text-gray-700">
                    <p
                        ref={(el) => (textRefs.current[0] = el)}
                        className="text-lg leading-relaxed"
                    >
                        <span className="font-semibold text-blue-600">
                            Prisma
                        </span>{" "}
                        — это ведущий медицинский информационный портал в
                        России, созданный в 2025 году. Мы предоставляем доступ к
                        самой актуальной и достоверной информации о здоровье,
                        диагностике и лечении.
                    </p>
                    <p
                        ref={(el) => (textRefs.current[1] = el)}
                        className="text-lg leading-relaxed"
                    >
                        Наша миссия — сделать медицинские знания доступными для
                        каждого. Мы объединяем экспертов в области медицины,
                        чтобы предоставить вам проверенные данные, которые
                        помогут принимать обоснованные решения о вашем здоровье.
                    </p>
                    <p
                        ref={(el) => (textRefs.current[2] = el)}
                        className="text-lg leading-relaxed"
                    >
                        <span className="font-semibold text-purple-600">
                            Prisma
                        </span>{" "}
                        — это не просто портал, это сообщество, где пациенты и
                        врачи могут обмениваться опытом, задавать вопросы и
                        находить ответы. Мы стремимся к тому, чтобы каждый
                        человек мог получить качественную медицинскую помощь и
                        информацию.
                    </p>
                    <p
                        ref={(el) => (textRefs.current[3] = el)}
                        className="text-lg leading-relaxed"
                    >
                        Мы гордимся тем, что внедряем передовые технологии и
                        мировые стандарты качества. Наш портал соответствует
                        лучшим международным практикам, что делает его надежным
                        источником информации для миллионов людей.
                    </p>
                </div>
                <div className="mt-10 text-center">
                    <Link
                        ref={buttonRef}
                        to="/register"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-110"
                    >
                        Узнать больше
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
