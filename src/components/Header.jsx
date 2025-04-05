import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import Logout from "./sessions/Logout";
import BeatLoader from "react-spinners/BeatLoader";
import axiosClient from "../axiosClient";
import { gsap } from "gsap";
const Header = () => {
    const { user, token, role, setRole } = useStateContext();
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        if (token) {
            axiosClient.get("/check-role").then(({ data }) => {
                setRole(data.RoleData);
            });
        }
        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        );
        gsap.fromTo(
            logoRef.current,
            { scale: 0, rotation: 90 },
            { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
        );
        gsap.fromTo(
            menuRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                delay: 0.5,
                ease: "power4.out",
            }
        );
    }, [token, setRole]);

    const handleHover = (e) => {
        gsap.to(e.target, { scale: 1.1, color: "white", duration: 0.3 });
    };

    const handleHoverOut = (e) => {
        gsap.to(e.target, { scale: 1, color: "white", duration: 0.3 });
    };

    return (
        <div>
            <div ref={headerRef} className="container mx-auto px-10 mb-8">
                <div className="border-b w-full border-blue-400 py-8">
                    <div className="md:float-left block">
                        <Link to="/">
                            <span
                                ref={logoRef}
                                className="cursor-pointer font-bold text-4xl text-white"
                            >
                                Prisma
                            </span>
                        </Link>
                    </div>

                    <div
                        ref={menuRef}
                        className="hidden md:justify-end md:flex"
                    >
                        <Link to="/home">
                            <span
                                ref={(el) => (linksRef.current[0] = el)}
                                className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverOut}
                            >
                                Главная Страница
                            </span>
                        </Link>
                        <Link to="/about">
                            <span
                                ref={(el) => (linksRef.current[1] = el)}
                                className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverOut}
                            >
                                О нас
                            </span>
                        </Link>

                        {!token && (
                            <>
                                <Link to="/login">
                                    <span
                                        ref={(el) => (linksRef.current[2] = el)}
                                        className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        Войти
                                    </span>
                                </Link>
                                <Link to="/register">
                                    <span
                                        ref={(el) => (linksRef.current[3] = el)}
                                        className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        Зарегистрироваться
                                    </span>
                                </Link>
                            </>
                        )}

                        {token && (
                            <>
                                {role.code ? (
                                    <>
                                        {role.code == "admin" ? (
                                            <>
                                                <Link to="/admin">
                                                    <span
                                                        ref={(el) =>
                                                            (linksRef.current[4] =
                                                                el)
                                                        }
                                                        className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                                        onMouseEnter={
                                                            handleHover
                                                        }
                                                        onMouseLeave={
                                                            handleHoverOut
                                                        }
                                                    >
                                                        Панель Администратора
                                                    </span>
                                                </Link>
                                                <Link to="/posts">
                                                    <span
                                                        ref={(el) =>
                                                            (linksRef.current[5] =
                                                                el)
                                                        }
                                                        className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                                        onMouseEnter={
                                                            handleHover
                                                        }
                                                        onMouseLeave={
                                                            handleHoverOut
                                                        }
                                                    >
                                                        <Logout />
                                                    </span>
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/user">
                                                    <span
                                                        ref={(el) =>
                                                            (linksRef.current[6] =
                                                                el)
                                                        }
                                                        className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                                        onMouseEnter={
                                                            handleHover
                                                        }
                                                        onMouseLeave={
                                                            handleHoverOut
                                                        }
                                                    >
                                                        Профиль
                                                    </span>
                                                </Link>
                                                <Link to="/posts">
                                                    <span
                                                        ref={(el) =>
                                                            (linksRef.current[7] =
                                                                el)
                                                        }
                                                        className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer"
                                                        onMouseEnter={
                                                            handleHover
                                                        }
                                                        onMouseLeave={
                                                            handleHoverOut
                                                        }
                                                    >
                                                        <Logout />
                                                    </span>
                                                </Link>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <span className="block mt-2 align-middle text-white ml-6 font-semibold cursor-pointer">
                                        <BeatLoader
                                            color="white"
                                            size={10}
                                            className="mx-auto"
                                        />
                                    </span>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Header;
