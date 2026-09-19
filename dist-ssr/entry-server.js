import React, { useEffect, useMemo, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Link, Route, Routes, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function LabIcon({ type }) {
	const iconMap = {
		flask: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgMainStroke",
				d: "M67 25H113M73 25V52L42 112C31 133 46 153 70 153H110C134 153 149 133 138 112L107 52V25"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMint labSvgLiquid",
				d: "M46 121C57 112 70 117 82 121C99 126 112 117 131 116V135C131 145 123 151 110 151H70C57 151 49 145 46 135V121Z"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgBubble",
				cx: "112",
				cy: "116",
				r: "5"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgChalk labSvgBubble",
				cx: "123",
				cy: "130",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgBubble",
				cx: "72",
				cy: "112",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "75",
				cy: "79",
				r: "5"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "105",
				cy: "79",
				r: "5"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth",
				d: "M78 94C85 102 95 102 102 94"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgShine",
				d: "M58 68V106"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar",
				d: "M133 34L139 47L153 50L141 58L143 72L133 63L121 72L124 58L112 50L126 47Z"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStarRay",
				d: "M134 18V26"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStarRay",
				d: "M158 36L150 42"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStarRay",
				d: "M111 34L118 41"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgFloatBubble",
				cx: "93",
				cy: "47",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble delay",
				cx: "104",
				cy: "59",
				r: "3"
			})
		] }),
		microscope: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgMainStroke",
				d: "M48 53L76 39M69 62L120 36C129 31 138 42 130 50L82 80"
			}),
			/* @__PURE__ */ jsx("rect", {
				className: "labSvgStroke labSvgMainStroke labSvgSoftFill",
				x: "116",
				y: "70",
				width: "30",
				height: "34",
				rx: "10",
				transform: "rotate(-12 131 87)"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgMainStroke",
				d: "M83 58C78 84 79 113 104 128"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgMainStroke",
				d: "M52 135H128M62 153H136C142 153 146 159 146 164H47C48 158 53 153 62 153Z"
			}),
			/* @__PURE__ */ jsx("rect", {
				className: "labSvgMintStroke labSvgSoftFill",
				x: "70",
				y: "118",
				width: "62",
				height: "16",
				rx: "8"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgBubble",
				cx: "46",
				cy: "84",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMintStroke",
				cx: "138",
				cy: "122",
				r: "5"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgAccent labSvgDot",
				d: "M72 35a4 4 0 1 0 0.1 0"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar small",
				d: "M148 48L153 57L163 59L154 65L156 76L148 69L138 76L141 65L132 59L143 57Z"
			})
		] }),
		gamepad: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgMainStroke labSvgSoftFill",
				d: "M50 76C56 66 68 63 82 68H98C112 63 124 66 130 76C136 88 143 116 135 130C129 139 117 138 108 126H72C63 138 51 139 45 130C37 116 44 88 50 76Z"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke",
				d: "M72 89V115M59 102H85"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgButton",
				cx: "112",
				cy: "91",
				r: "7"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgButton",
				cx: "128",
				cy: "106",
				r: "7"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgButton",
				cx: "116",
				cy: "121",
				r: "6"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgCable",
				d: "M90 65V41C90 29 99 22 114 22H124"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "87",
				cy: "103",
				r: "4"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth subtle",
				d: "M91 116C96 120 103 120 108 116"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble",
				cx: "45",
				cy: "63",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble delay",
				cx: "135",
				cy: "64",
				r: "4"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar small",
				d: "M145 34L149 43L159 45L151 51L153 61L145 55L136 61L138 51L130 45L140 43Z"
			})
		] }),
		works: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("rect", {
				className: "labSvgStroke labSvgMainStroke labSvgSoftFill",
				x: "42",
				y: "58",
				width: "104",
				height: "74",
				rx: "16",
				transform: "rotate(-2 94 95)"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke soft",
				d: "M58 82H126M58 101H120"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgAccentStroke labSvgRuler",
				d: "M63 143L143 122"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgAccentStroke thin",
				d: "M74 140L72 132M90 136L88 128M106 132L104 124M122 128L120 120M137 124L135 116"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMintStroke labSvgPencil",
				d: "M56 111L137 30"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgChalk",
				d: "M136 24L153 17L146 35Z"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "79",
				cy: "92",
				r: "3.8"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth subtle",
				d: "M86 109C92 113 101 113 107 109"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar",
				d: "M147 54L152 65L164 67L154 75L157 87L147 80L136 87L139 75L129 67L141 65Z"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar small",
				d: "M44 122L48 130L57 132L50 137L52 146L44 141L36 146L38 137L31 132L40 130Z"
			})
		] }),
		about: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("rect", {
				className: "labSvgStroke labSvgMainStroke labSvgSoftFill",
				x: "31",
				y: "62",
				width: "118",
				height: "82",
				rx: "16"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke",
				d: "M70 52H110"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke",
				d: "M72 62V54C72 48 77 44 84 44H96C103 44 108 48 108 54V62"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMintStroke labSvgSoftFill",
				cx: "65",
				cy: "103",
				r: "18"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "61",
				cy: "99",
				r: "3"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "70",
				cy: "99",
				r: "3"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth subtle",
				d: "M61 111C65 115 70 115 74 111"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke soft",
				d: "M92 89H133M92 107H130M92 125H118"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble",
				cx: "137",
				cy: "78",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble delay",
				cx: "139",
				cy: "134",
				r: "4"
			})
		] }),
		survey: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke labSvgMainStroke labSvgSoftFill",
				d: "M63 31H117M68 31V55L50 111C44 131 58 148 80 148H100C122 148 136 131 130 111L112 55V31"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgAccent labSvgLiquid",
				d: "M54 113H126V131C126 141 117 148 100 148H80C63 148 54 141 54 131Z"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke soft",
				d: "M118 58H139M118 74H139M118 90H139M118 106H139M118 122H139"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "78",
				cy: "90",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "99",
				cy: "90",
				r: "4"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth subtle",
				d: "M79 104C85 110 94 110 100 104"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgFloatBubble",
				cx: "83",
				cy: "63",
				r: "5"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgFloatBubble delay",
				cx: "101",
				cy: "72",
				r: "3.5"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar small",
				d: "M138 38L142 46L151 48L144 54L146 63L138 58L130 63L132 54L125 48L134 46Z"
			})
		] }),
		contact: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("rect", {
				className: "labSvgStroke labSvgMainStroke labSvgSoftFill",
				x: "32",
				y: "65",
				width: "116",
				height: "78",
				rx: "14"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke soft",
				d: "M36 75L90 112L144 75"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStroke soft",
				d: "M36 134L76 104M144 134L104 104"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMintStroke",
				d: "M50 128H87M50 140H103"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "78",
				cy: "105",
				r: "3.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye",
				cx: "96",
				cy: "105",
				r: "3.5"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth subtle",
				d: "M80 116C86 120 93 120 99 116"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble",
				cx: "143",
				cy: "60",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgFloatBubble delay",
				cx: "39",
				cy: "134",
				r: "4"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar small",
				d: "M150 37L154 45L163 47L156 53L158 62L150 57L142 62L144 53L137 47L146 45Z"
			})
		] }),
		atom: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("ellipse", {
				className: "labSvgStroke labSvgAtomOrbit",
				cx: "90",
				cy: "92",
				rx: "62",
				ry: "24"
			}),
			/* @__PURE__ */ jsx("ellipse", {
				className: "labSvgStroke labSvgAtomOrbit orbitTiltA",
				cx: "90",
				cy: "92",
				rx: "62",
				ry: "24"
			}),
			/* @__PURE__ */ jsx("ellipse", {
				className: "labSvgStroke labSvgAtomOrbit orbitTiltB",
				cx: "90",
				cy: "92",
				rx: "62",
				ry: "24"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgChalk labSecretCore",
				cx: "90",
				cy: "92",
				r: "10"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye secretEye eyeA",
				cx: "86",
				cy: "90",
				r: "2.5"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgEye secretEye eyeB",
				cx: "94",
				cy: "90",
				r: "2.5"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgMouth secretMouth",
				d: "M86 98C89 101 93 101 96 98"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgMint labSvgElectron",
				cx: "150",
				cy: "92",
				r: "4"
			}),
			/* @__PURE__ */ jsx("circle", {
				className: "labSvgAccent labSvgElectron delay",
				cx: "55",
				cy: "73",
				r: "4"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "labSvgStar",
				d: "M137 38L142 49L154 51L144 59L147 71L137 64L126 71L129 59L119 51L131 49Z"
			})
		] })
	};
	return /* @__PURE__ */ jsx("span", {
		className: `labSvgWrap labSvgWrap-${type}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("svg", {
			className: `labSvg labSvg-${type}`,
			viewBox: "0 0 180 180",
			role: "img",
			focusable: "false",
			children: iconMap[type]
		})
	});
}
function Home() {
	const navigate = useNavigate();
	const [flaskBurst, setFlaskBurst] = useState(false);
	const [discoverCount, setDiscoverCount] = useState(0);
	const isSecretUnlocked = discoverCount >= 5;
	const statusText = useMemo(() => {
		if (isSecretUnlocked) return "ひみつの休憩室が開きました。ようこそ。";
		return `ひみつ反応チェック中... ${discoverCount}/5`;
	}, [discoverCount, isSecretUnlocked]);
	const handleFlaskTap = () => {
		if (flaskBurst) return;
		setFlaskBurst(true);
		window.setTimeout(() => {
			navigate("/apps");
			setFlaskBurst(false);
		}, 900);
	};
	const handleSecretTap = () => {
		if (isSecretUnlocked) {
			navigate("/secret");
			return;
		}
		setDiscoverCount((count) => Math.min(count + 1, 5));
	};
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard homeBoard",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "chalkDoodles",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "chalkNote note1",
							children: "mix!"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "chalkNote note2",
							children: "idea?"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "chalkNote note3",
							children: "lab log"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "chalkNote note4",
							children: "play test"
						}),
						/* @__PURE__ */ jsx("span", { className: "chalkStar star1" }),
						/* @__PURE__ */ jsx("span", { className: "chalkStar star2" }),
						/* @__PURE__ */ jsx("span", { className: "chalkStar star3" }),
						/* @__PURE__ */ jsx("span", { className: "chalkCircle circle1" }),
						/* @__PURE__ */ jsx("span", { className: "chalkCircle circle2" }),
						/* @__PURE__ */ jsx("span", { className: "chalkArrow arrow1" }),
						/* @__PURE__ */ jsx("span", { className: "chalkArrow arrow2" }),
						/* @__PURE__ */ jsx("span", { className: "chalkLine line1" }),
						/* @__PURE__ */ jsx("span", { className: "chalkLine line2" }),
						/* @__PURE__ */ jsx("span", { className: "chalkLine line3" }),
						/* @__PURE__ */ jsx("span", { className: "chalkDust dust1" }),
						/* @__PURE__ */ jsx("span", { className: "chalkDust dust2" }),
						/* @__PURE__ */ jsx("span", { className: "chalkDust dust3" })
					]
				}),
				/* @__PURE__ */ jsxs("header", {
					className: "boardHeader cuteBoardHeader",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "homeMascot",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ jsx("span", { className: "homeMascotNeck" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotBody" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotLiquid" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotEye eyeLeft" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotEye eyeRight" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotMouth" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotStar" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotBubble bubbleOne" }),
							/* @__PURE__ */ jsx("span", { className: "homeMascotBubble bubbleTwo" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "homeTitleText",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "smallTag",
								children: "WAKU WAKU / DOKI DOKI INSTITUTE"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Puku Lab" }),
							/* @__PURE__ */ jsx("p", {
								className: "leadText",
								children: "ワクワクとドキドキが増えていく研究所"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "homeTinyMemo",
								children: "黒板の中の2D研究室で、アプリ・AI画像・遊びの実験を育てています。"
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "boardGrid boardGridEight",
					children: [
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							className: `doodle doodleFlask doodlePrimary homeSlotTop1 ${flaskBurst ? "active" : ""}`,
							onClick: handleFlaskTap,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "FLASK / APPS"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleBadge",
									children: "START"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "フラスコをタップしてアプリへ"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "flask" })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "doodle doodleMicroscope doodleFeatured homeSlotTop2",
							to: "/gallery",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "MICROSCOPE / GALLERY"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleBadge",
									children: "OPEN"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "AIビジュアル実験を観察する"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "microscope" })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "doodle doodleGamePad homeSlotTop3",
							to: "/game",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "GAME PAD / PLAY TEST"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleBadge",
									children: "SOON"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "準備中の遊び場"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "gamepad" })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "doodle doodleDesignDesk homeSlotTop4",
							to: "/works",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "DESIGN DESK / WORKS"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleBadge",
									children: "NEW"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "HP制作・運営相談"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "works" })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "doodle doodleAbout homeSlotBottom1",
							to: "/about",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "NAME TAG / ABOUT"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "研究所のことを見る"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "about" })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "doodle doodleCylinder homeSlotBottom2",
							to: "/questionnaire",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "BEAKER / SURVEY"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "研究所に声を届ける"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "survey" })
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							className: "doodle doodleMail homeSlotBottom3",
							to: "/contact",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "LETTER / CONTACT"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: "研究所へメモを送る"
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "contact" })
							]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							className: `doodle doodleAtom homeSlotBottom4 ${isSecretUnlocked ? "secretReady" : ""}`,
							onClick: handleSecretTap,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "doodleLabel",
									children: "SECRET ATOM"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "doodleHint",
									children: isSecretUnlocked ? "ひみつの休憩室へ" : `ひみつ反応 ${discoverCount}/5`
								}),
								/* @__PURE__ */ jsx(LabIcon, { type: "atom" })
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("footer", {
					className: "boardFooter",
					children: [/* @__PURE__ */ jsx("p", { children: statusText }), isSecretUnlocked ? /* @__PURE__ */ jsx(Link, {
						className: "secretDoor",
						to: "/secret",
						children: "SECRET LOUNGE"
					}) : /* @__PURE__ */ jsx("span", {
						className: "secretDoor disabled",
						children: "LOCKED"
					})]
				})
			]
		})
	});
}
var apps = [
	{
		slug: "kanlog",
		name: "巻ログ",
		type: "るのと始める漫画管理アプリ",
		note: "紙漫画の管理・巻数チェック・ダブり防止。漫画コレクションを楽しく整理。",
		status: "AVAILABLE DETAIL"
	},
	{
		slug: "",
		name: "開発中",
		type: "研究中のプロトタイプ",
		note: "次のアイデアを育てながら、Puku Lab の新しいアプリとして準備中です。",
		status: "COMING SOON"
	},
	{
		slug: "",
		name: "開発中",
		type: "構想中のアプリ",
		note: "日常のちょっとした困りごとを、遊び心のあるかたちで解決する案を検討しています。",
		status: "COMING SOON"
	},
	{
		slug: "",
		name: "開発中",
		type: "次回プロトタイプ候補",
		note: "アンケートや反応も見ながら、次に育てるテーマを研究しています。",
		status: "COMING SOON"
	}
];
function Apps() {
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame innerPageFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard appsBoard",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "pageHead appsHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "smallTag",
							children: "APP SHOWCASE"
						}),
						/* @__PURE__ */ jsx("h2", { children: "開発中のアプリ" }),
						/* @__PURE__ */ jsx("p", { children: "フラスコから生まれたプロトタイプを紹介。" })
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "appsList",
					children: apps.map((app, index) => {
						const isLinked = Boolean(app.slug);
						const key = app.slug || `coming-soon-${index}`;
						if (isLinked) return /* @__PURE__ */ jsxs(Link, {
							to: `/apps/${app.slug}`,
							className: "appEntry appEntryLink",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "appEntryMain",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "appEntryStatus",
										children: app.status
									}),
									/* @__PURE__ */ jsx("h3", { children: app.name }),
									/* @__PURE__ */ jsx("p", {
										className: "meta",
										children: app.type
									}),
									/* @__PURE__ */ jsx("p", {
										className: "appEntryNote",
										children: app.note
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "appEntryActions",
								children: /* @__PURE__ */ jsx("span", {
									className: "navButton small",
									children: "詳細を見る"
								})
							})]
						}, key);
						return /* @__PURE__ */ jsxs("article", {
							className: "appEntry",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "appEntryMain",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "appEntryStatus",
										children: app.status
									}),
									/* @__PURE__ */ jsx("h3", { children: app.name }),
									/* @__PURE__ */ jsx("p", {
										className: "meta",
										children: app.type
									}),
									/* @__PURE__ */ jsx("p", {
										className: "appEntryNote",
										children: app.note
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "appEntryActions",
								children: /* @__PURE__ */ jsx("span", {
									className: "comingBadge",
									children: "準備中"
								})
							})]
						}, key);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "pageActions appsFooterActions",
					children: [/* @__PURE__ */ jsx(Link, {
						className: "navButton",
						to: "/contact",
						children: "このアプリについて問い合わせる"
					}), /* @__PURE__ */ jsx(Link, {
						className: "navButton ghost",
						to: "/",
						children: "ホームへ戻る"
					})]
				})
			]
		})
	});
}
var SURVEY_ENDPOINT = "https://script.google.com/macros/s/AKfycbxlN4pN8ERn4gp0jjK-pqvyRMguIXe8fq8_biKMe7BKyBJE9aKuqQnjA6HQ6xiu6hE/exec";
var featureOptions = [
	{
		value: "duplicate_check",
		label: "ダブり防止"
	},
	{
		value: "new_release",
		label: "新刊通知"
	},
	{
		value: "collection_visual",
		label: "コレクションの見える化"
	},
	{
		value: "room_growth",
		label: "部屋が育つ演出"
	},
	{
		value: "memo_review",
		label: "感想メモ・レビュー"
	}
];
var lifeProblemOptions = [
	{
		value: "collection",
		label: "本・漫画・コレクション管理"
	},
	{
		value: "task_schedule",
		label: "予定・タスク管理"
	},
	{
		value: "money_shopping",
		label: "買い物・お金まわり"
	},
	{
		value: "health_life",
		label: "生活習慣・体調管理"
	},
	{
		value: "travel_outing",
		label: "旅行・おでかけ"
	},
	{
		value: "communication",
		label: "人間関係・連絡"
	},
	{
		value: "learning_work",
		label: "学習・仕事・作業"
	},
	{
		value: "none",
		label: "今は特にない"
	}
];
var pukulabInterestOptions = [
	{
		value: "manga_management",
		label: "漫画・コレクション管理"
	},
	{
		value: "life_record",
		label: "生活を整えるアプリ"
	},
	{
		value: "travel_memory",
		label: "旅行・思い出系のアプリ"
	},
	{
		value: "ai_dev_log",
		label: "AIを使った開発記録"
	},
	{
		value: "note_story",
		label: "note記事・開発日誌"
	},
	{
		value: "fictional_world",
		label: "物語・世界観づくり"
	},
	{
		value: "local_project",
		label: "地域企画・リアル展開"
	},
	{
		value: "not_sure",
		label: "まだよく分からない"
	}
];
function getText(formData, key) {
	return String(formData.get(key) || "").trim();
}
function Questionnaire() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState("");
	async function handleSubmit(event) {
		event.preventDefault();
		setSubmitError("");
		const formElement = event.currentTarget;
		const formData = new FormData(formElement);
		const payload = {
			form_version: "pukulab_marketing_survey_v2",
			submitted_at: (/* @__PURE__ */ new Date()).toISOString(),
			age_range: getText(formData, "ageRange"),
			gender: getText(formData, "gender"),
			device_type: getText(formData, "deviceType"),
			app_decision_factor: getText(formData, "appDecisionFactor"),
			life_problem_categories: formData.getAll("lifeProblemCategories"),
			life_problem_note: getText(formData, "lifeProblemNote"),
			books_owned: getText(formData, "booksOwned"),
			duplicate_experience: getText(formData, "duplicateExperience"),
			biggest_problem: getText(formData, "biggestProblem"),
			wanted_features: formData.getAll("wantedFeatures"),
			pukulab_interests: formData.getAll("pukulabInterests"),
			note: getText(formData, "note"),
			page_url: window.location.href,
			user_agent: navigator.userAgent
		};
		if (!payload.device_type || !payload.app_decision_factor) {
			setSubmitError("未回答の必須項目があります。");
			return;
		}
		try {
			setIsSubmitting(true);
			const body = new URLSearchParams();
			body.append("payload", JSON.stringify(payload));
			await fetch(SURVEY_ENDPOINT, {
				method: "POST",
				mode: "no-cors",
				body
			});
			setIsSubmitted(true);
			formElement.reset();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch (error) {
			console.error(error);
			setSubmitError("送信に失敗しました。時間をおいてもう一度お試しください。");
		} finally {
			setIsSubmitting(false);
		}
	}
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame innerPageFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard surveyBoard",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "pageHead surveyHead",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "smallTag",
						children: "MARKETING LAB"
					}),
					/* @__PURE__ */ jsx("h2", { children: "研究アンケート" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Puku Labでは、使いたくなるアプリやコンテンツを研究しています。",
						/* @__PURE__ */ jsx("br", {}),
						"答えられる範囲で、あなたの声を聞かせてください。"
					] })
				]
			}), isSubmitted ? /* @__PURE__ */ jsxs("section", {
				className: "surveyThanks",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "smallTag",
						children: "ANALYSIS COMPLETE"
					}),
					/* @__PURE__ */ jsx("h3", { children: "研究データを受け取りました！" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"回答ありがとうございました。",
						/* @__PURE__ */ jsx("br", {}),
						"今後の改善や、新しい企画の参考に使わせていただきます。"
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "pageActions",
						children: [/* @__PURE__ */ jsx(Link, {
							className: "navButton",
							to: "/",
							children: "ホームへ戻る"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "navButton ghost",
							onClick: () => setIsSubmitted(false),
							children: "もう一度回答する"
						})]
					})
				]
			}) : /* @__PURE__ */ jsxs("form", {
				className: "surveyForm",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ jsxs("fieldset", {
						className: "surveyBlock",
						children: [
							/* @__PURE__ */ jsx("legend", { children: "01. あなたについて" }),
							/* @__PURE__ */ jsx("p", {
								className: "surveyHint",
								children: "年代・性別は任意です。答えたくない項目は飛ばして大丈夫です。"
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "年代"
								}), /* @__PURE__ */ jsxs("select", {
									name: "ageRange",
									defaultValue: "",
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											children: "回答しない"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "10s",
											children: "10代"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "20s",
											children: "20代"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "30s",
											children: "30代"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "40s",
											children: "40代"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "50s",
											children: "50代"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "60_over",
											children: "60代以上"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "性別"
								}), /* @__PURE__ */ jsxs("select", {
									name: "gender",
									defaultValue: "",
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											children: "回答しない"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "male",
											children: "男性"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "female",
											children: "女性"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "other",
											children: "その他"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "questionText",
									children: ["普段よく使う端末", /* @__PURE__ */ jsx("span", {
										className: "requiredMark",
										children: "*"
									})]
								}), /* @__PURE__ */ jsxs("select", {
									name: "deviceType",
									defaultValue: "",
									required: true,
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											children: "選んでください"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "iphone",
											children: "iPhone"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "android",
											children: "Android"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "both_mobile",
											children: "iPhone / Android 両方"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "pc_main",
											children: "PC中心"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "other",
											children: "その他"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "questionText",
									children: ["新しいアプリを入れるときの決め手", /* @__PURE__ */ jsx("span", {
										className: "requiredMark",
										children: "*"
									})]
								}), /* @__PURE__ */ jsxs("select", {
									name: "appDecisionFactor",
									defaultValue: "",
									required: true,
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											children: "選んでください"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "easy_to_use",
											children: "使いやすさ"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "features",
											children: "機能"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "design",
											children: "見た目・デザイン"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "worldview",
											children: "世界観・雰囲気"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "price",
											children: "価格"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "reviews",
											children: "口コミ・評価"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "privacy",
											children: "安心感・信頼感"
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("fieldset", {
						className: "surveyBlock",
						children: [
							/* @__PURE__ */ jsx("legend", { children: "02. 日常の困りごと" }),
							/* @__PURE__ */ jsxs("div", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "日常や趣味で「少し面倒」と感じるものはありますか？（複数可）"
								}), /* @__PURE__ */ jsx("div", {
									className: "checkboxGroup",
									children: lifeProblemOptions.map((item) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										name: "lifeProblemCategories",
										value: item.value
									}), /* @__PURE__ */ jsx("span", { children: item.label })] }, item.value))
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "具体的に「ちょっと不便」と感じていることがあれば教えてください"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "lifeProblemNote",
									rows: 4
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("fieldset", {
						className: "surveyBlock",
						children: [
							/* @__PURE__ */ jsx("legend", { children: "03. 漫画・コレクションについて" }),
							/* @__PURE__ */ jsx("p", {
								className: "surveyHint",
								children: "巻ログ改善の参考にします。漫画をあまり読まない方は飛ばして大丈夫です。"
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "漫画はどれくらい持っていますか？"
								}), /* @__PURE__ */ jsxs("select", {
									name: "booksOwned",
									defaultValue: "",
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											children: "選んでください"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "under_50",
											children: "〜50冊"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "50_200",
											children: "50〜200冊"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "200_500",
											children: "200〜500冊"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "500_over",
											children: "500冊以上"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "not_read",
											children: "あまり読まない"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "ダブり買いをしたことはありますか？"
								}), /* @__PURE__ */ jsxs("div", {
									className: "radioGroup",
									children: [
										/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "duplicateExperience",
											value: "often"
										}), /* @__PURE__ */ jsx("span", { children: "よくある" })] }),
										/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "duplicateExperience",
											value: "sometimes"
										}), /* @__PURE__ */ jsx("span", { children: "たまにある" })] }),
										/* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "duplicateExperience",
											value: "never"
										}), /* @__PURE__ */ jsx("span", { children: "ない" })] })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "コレクション管理で困ることがあれば選んでください"
								}), /* @__PURE__ */ jsxs("select", {
									name: "biggestProblem",
									defaultValue: "",
									children: [
										/* @__PURE__ */ jsx("option", {
											value: "",
											children: "選んでください"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "forget_owned_books",
											children: "持っている本を忘れる"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "duplicate_purchase",
											children: "ダブり購入"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "new_release_check",
											children: "新刊チェックが大変"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "collection_management",
											children: "コレクション管理が面倒"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "storage_problem",
											children: "置き場所や収納"
										}),
										/* @__PURE__ */ jsx("option", {
											value: "no_problem",
											children: "特に困っていない"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "surveyLabel",
								children: [/* @__PURE__ */ jsx("span", {
									className: "questionText",
									children: "巻ログにあると嬉しい機能を選んでください（複数可）"
								}), /* @__PURE__ */ jsx("div", {
									className: "checkboxGroup",
									children: featureOptions.map((feature) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										name: "wantedFeatures",
										value: feature.value
									}), /* @__PURE__ */ jsx("span", { children: feature.label })] }, feature.value))
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("fieldset", {
						className: "surveyBlock",
						children: [/* @__PURE__ */ jsx("legend", { children: "04. Puku Labで気になるもの" }), /* @__PURE__ */ jsxs("div", {
							className: "surveyLabel",
							children: [/* @__PURE__ */ jsx("span", {
								className: "questionText",
								children: "今後のPuku Labで少し気になるものがあれば教えてください（複数可）"
							}), /* @__PURE__ */ jsx("div", {
								className: "checkboxGroup",
								children: pukulabInterestOptions.map((item) => /* @__PURE__ */ jsxs("label", { children: [/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									name: "pukulabInterests",
									value: item.value
								}), /* @__PURE__ */ jsx("span", { children: item.label })] }, item.value))
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("fieldset", {
						className: "surveyBlock",
						children: [/* @__PURE__ */ jsx("legend", { children: "05. その他" }), /* @__PURE__ */ jsxs("label", {
							className: "surveyLabel",
							children: [/* @__PURE__ */ jsx("span", {
								className: "questionText",
								children: "Puku Labやアプリについて、ひとことあればどうぞ"
							}), /* @__PURE__ */ jsx("textarea", {
								name: "note",
								rows: 5
							})]
						})]
					}),
					submitError ? /* @__PURE__ */ jsx("p", {
						className: "surveyError",
						"aria-live": "polite",
						children: submitError
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "metricPanel",
						children: [/* @__PURE__ */ jsx("p", { children: "研究メモ" }), /* @__PURE__ */ jsx("strong", { children: "回答は、今後の改善・企画・マーケティング研究の参考に使われます" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pageActions",
						children: [/* @__PURE__ */ jsx("button", {
							className: "navButton",
							type: "submit",
							disabled: isSubmitting,
							children: isSubmitting ? "送信中..." : "研究データを送る"
						}), /* @__PURE__ */ jsx(Link, {
							className: "navButton ghost",
							to: "/",
							children: "ホームへ戻る"
						})]
					})
				]
			})]
		})
	});
}
var categoryOptions = [
	{
		value: "works",
		label: "HP制作・運営相談"
	},
	{
		value: "entsumugi",
		label: "縁紡・議員向けサポート相談"
	},
	{
		value: "app",
		label: "アプリについて"
	},
	{
		value: "bug",
		label: "バグ報告"
	},
	{
		value: "idea",
		label: "改善案・アイデア"
	},
	{
		value: "collaboration",
		label: "コラボ・お仕事相談"
	},
	{
		value: "other",
		label: "その他"
	}
];
var initialForm = {
	name: "",
	email: "",
	category: "works",
	message: "",
	website: ""
};
function getCategoryFromQuery(type) {
	return categoryOptions.map((item) => item.value).includes(type) ? type : "works";
}
function getEntsumugiContext(searchParams) {
	if (searchParams.get("type") !== "entsumugi") return null;
	const source = searchParams.get("source");
	const rows = [];
	const push = (label, key) => {
		const value = searchParams.get(key);
		if (value) rows.push([label, value]);
	};
	push("希望コース", "plan");
	push("月額目安", "monthly");
	push("診断時の料金", "price");
	push("初期設定・追加制作", "setup");
	push("SNS", "sns");
	push("LINE公式", "line");
	push("WEB", "web");
	push("追加制作", "creative");
	return {
		source,
		sourceLabel: source === "estimate" ? "料金目安シミュレーター" : source === "diagnosis" ? "コース診断" : "縁紡LP",
		rows
	};
}
function makePrefill(context) {
	if (!context || context.rows.length === 0) return "";
	const summary = context.rows.map(([label, value]) => `・${label}：${value}`).join("\n");
	return `【${context.sourceLabel}の結果】\n${summary}\n\n相談したいこと：\n`;
}
function Contact() {
	const [searchParams] = useSearchParams();
	const entsumugiContext = useMemo(() => getEntsumugiContext(searchParams), [searchParams]);
	const isEntsumugiContact = searchParams.get("type") === "entsumugi";
	const prefillMessage = useMemo(() => makePrefill(entsumugiContext), [entsumugiContext]);
	const [form, setForm] = useState(() => ({
		...initialForm,
		category: getCategoryFromQuery(searchParams.get("type")),
		message: prefillMessage
	}));
	const [status, setStatus] = useState("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const isSubmitting = status === "submitting";
	const isSent = status === "sent";
	useEffect(() => {
		const categoryFromQuery = getCategoryFromQuery(searchParams.get("type"));
		setForm((prev) => ({
			...prev,
			category: categoryFromQuery,
			message: prev.message.trim() ? prev.message : prefillMessage
		}));
	}, [prefillMessage, searchParams]);
	function updateField(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	async function onSubmit(event) {
		event.preventDefault();
		setErrorMessage("");
		setErrorMessage("現在、送信機能の接続準備中です。お急ぎの場合はXまたはnoteからご連絡ください。");
	}
	return /* @__PURE__ */ jsx("main", {
		className: `siteFrame innerPageFrame ${isEntsumugiContact ? "entsumugiContactPage" : ""}`,
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "pageHead",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "smallTag",
						children: isEntsumugiContact ? "ENTSUMUGI CONTACT" : "CONTACT DESK / LAB MEMO"
					}),
					/* @__PURE__ */ jsx("h2", { children: isEntsumugiContact ? "縁紡について相談する" : "お問い合わせ" }),
					/* @__PURE__ */ jsx("p", { children: isEntsumugiContact ? "現在のSNS運用、事務所体制、困っていることなど、分かる範囲でお知らせください。まだ整理できていない段階でも大丈夫です。" : "アプリの感想・不具合報告・HP制作相談・運営まわりの相談など、Puku Labへの連絡はこちらからどうぞ。" })
				]
			}), isSent ? /* @__PURE__ */ jsxs("section", {
				className: "surveyThanks",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "smallTag",
						children: "MESSAGE RECEIVED"
					}),
					/* @__PURE__ */ jsx("h3", { children: isEntsumugiContact ? "縁紡へのご相談を受け取りました" : "メッセージを受け取りました" }),
					/* @__PURE__ */ jsx("p", { children: "内容を確認して、必要に応じてご連絡します。" }),
					/* @__PURE__ */ jsxs("div", {
						className: "pageActions",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "navButton",
							onClick: () => setStatus("idle"),
							children: "もう一度送る"
						}), /* @__PURE__ */ jsx(Link, {
							className: "navButton ghost",
							to: isEntsumugiContact ? "/entsumugi" : "/",
							children: "戻る"
						})]
					})
				]
			}) : /* @__PURE__ */ jsxs("form", {
				className: "contactForm",
				onSubmit,
				children: [
					entsumugiContext?.rows?.length ? /* @__PURE__ */ jsxs("section", {
						className: "entsumugiContactContext",
						"aria-label": "引き継いだ診断・料金目安",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "引き継ぎ済み" }), /* @__PURE__ */ jsxs("strong", { children: [entsumugiContext.sourceLabel, "の内容"] })] }),
							/* @__PURE__ */ jsx("dl", { children: entsumugiContext.rows.map(([label, value]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: label }), /* @__PURE__ */ jsx("dd", { children: value })] }, label)) }),
							/* @__PURE__ */ jsx("p", { children: "この内容はお問い合わせ本文にも入っています。必要に応じて書き換えてください。" })
						]
					}) : null,
					/* @__PURE__ */ jsxs("label", { children: ["お名前", /* @__PURE__ */ jsx("input", {
						type: "text",
						name: "name",
						value: form.name,
						onChange: (event) => updateField("name", event.target.value),
						autoComplete: "name",
						required: true
					})] }),
					/* @__PURE__ */ jsxs("label", { children: ["メール", /* @__PURE__ */ jsx("input", {
						type: "email",
						name: "email",
						value: form.email,
						onChange: (event) => updateField("email", event.target.value),
						autoComplete: "email",
						required: true
					})] }),
					/* @__PURE__ */ jsxs("label", { children: ["内容の種類", /* @__PURE__ */ jsx("select", {
						name: "category",
						value: form.category,
						onChange: (event) => updateField("category", event.target.value),
						children: categoryOptions.map((option) => /* @__PURE__ */ jsx("option", {
							value: option.value,
							children: option.label
						}, option.value))
					})] }),
					/* @__PURE__ */ jsxs("label", { children: ["お問い合わせ内容", /* @__PURE__ */ jsx("textarea", {
						name: "message",
						rows: isEntsumugiContact ? 10 : 6,
						value: form.message,
						onChange: (event) => updateField("message", event.target.value),
						placeholder: isEntsumugiContact ? "現在の運用状況、困っていること、希望する支援などを自由に書いてください。" : "相談したい内容、気になったこと、制作したいページのイメージなどを自由に書いてください。",
						required: true
					})] }),
					/* @__PURE__ */ jsxs("label", {
						"aria-hidden": "true",
						style: {
							position: "absolute",
							left: "-10000px",
							width: "1px",
							height: "1px",
							overflow: "hidden"
						},
						children: ["ウェブサイト", /* @__PURE__ */ jsx("input", {
							type: "text",
							name: "_gotcha",
							value: form.website,
							onChange: (event) => updateField("website", event.target.value),
							tabIndex: -1,
							autoComplete: "off"
						})]
					}),
					errorMessage ? /* @__PURE__ */ jsx("p", {
						className: "surveyError",
						"aria-live": "polite",
						children: errorMessage
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "metricPanel",
						children: [/* @__PURE__ */ jsx("p", { children: isEntsumugiContact ? "ENTSUMUGI CONSULTATION" : "CONTACT MEMO" }), /* @__PURE__ */ jsx("strong", { children: isEntsumugiContact ? "コースが決まっていなくても、現在の状況から一緒に整理できます" : "HP制作・アプリ・AI画像・運営導線など、Puku Labに関する連絡を受け付けています" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pageActions",
						children: [
							/* @__PURE__ */ jsx("button", {
								className: "navButton",
								type: "submit",
								disabled: isSubmitting,
								children: isSubmitting ? "送信中..." : isEntsumugiContact ? "縁紡へ相談を送る" : "研究所へ届ける"
							}),
							/* @__PURE__ */ jsx(Link, {
								className: "navButton ghost",
								to: isEntsumugiContact ? "/entsumugi" : "/works",
								children: isEntsumugiContact ? "縁紡へ戻る" : "制作相談室へ戻る"
							}),
							!isEntsumugiContact ? /* @__PURE__ */ jsx(Link, {
								className: "navButton ghost",
								to: "/",
								children: "ホームへ戻る"
							}) : null
						]
					})
				]
			})]
		})
	});
}
function Experiments() {
	return /* @__PURE__ */ jsx("div", {
		className: "pageShell",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pagePaper",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "pageHeader",
				children: [/* @__PURE__ */ jsx("h2", { children: "Experiments" }), /* @__PURE__ */ jsx(Link, {
					className: "backLink",
					to: "/",
					children: "← Home"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "pageBody",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "pageLead",
						children: "ここに「実験」を追加していく。"
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "list",
						children: [
							/* @__PURE__ */ jsx("li", { children: "ボタンでフラスコ状態変化（useState）" }),
							/* @__PURE__ */ jsx("li", { children: "小さいWebツール置き場" }),
							/* @__PURE__ */ jsx("li", { children: "アプリのUI試作" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "noteBox",
						children: /* @__PURE__ */ jsx("p", { children: "次は「実験スタート」ボタンで液体を泡立てるのが気持ちいい。" })
					})
				]
			})]
		})
	});
}
var NOTE_URL = "https://note.com/rich_bison8482";
var X_URL = "https://x.com/pukurin5573607";
var PIXIV_URL$1 = "https://www.pixiv.net/users/126319212";
var proofItems = [
	"元議員秘書として3年間勤務",
	"漫画管理アプリをGoogle Playで公開",
	"Puku Lab公式サイト・LPを自作",
	"noteで個人開発の試行錯誤を発信"
];
var storySteps = [
	{
		number: "01",
		label: "SECRETARY",
		title: "伝える仕事を支える",
		text: "議員秘書として、日程調整、文章整理、連絡、情報発信などを経験しました。表に出る言葉の前には、事実を整理し、相手に合わせて順番を組み直す仕事があります。"
	},
	{
		number: "02",
		label: "TURNING POINT",
		title: "仕事を離れてつくる側へ",
		text: "退職後、AIとの対話をきっかけに個人開発を開始。分からないことを一つずつ調べ、試し、失敗しながら、アプリとホームページを自分の手で形にしてきました。"
	},
	{
		number: "03",
		label: "FIRST RELEASE",
		title: "漫画好きからアプリ公開へ",
		text: "『持っている漫画が分からなくなる』という自分の困りごとから、漫画・ラノベ管理アプリ『巻ログ』を企画。AndroidアプリとしてGoogle Playで公開しました。"
	},
	{
		number: "04",
		label: "PUKU LAB",
		title: "点だった活動を研究所へ",
		text: "アプリ、HP・LP制作、文章、AIビジュアル、SNS発信をPuku Labに集約。作ることと届けることを、別々にしない個人開発の拠点として育てています。"
	}
];
var experienceCards = [
	{
		label: "APP DEVELOPMENT",
		title: "漫画・ラノベ管理アプリ『巻ログ』",
		text: "企画、機能設計、画面づくり、テスト、Google Play公開、紹介LP、発信まで進めている個人開発アプリです。",
		linkLabel: "巻ログの機能を見る",
		to: "/apps/kanlog"
	},
	{
		label: "WEB / LANDING PAGE",
		title: "Puku Lab公式サイト・制作相談室",
		text: "黒板の中の2D研究室という世界観を軸に、アプリ、実績、発信、問い合わせをつなぐホームページとLPを制作しています。",
		linkLabel: "HP・LP制作の内容を見る",
		to: "/works"
	},
	{
		label: "AI VISUAL",
		title: "AIビジュアル実験室",
		text: "AIで生成したイラストや写真風表現を、そのまま並べるのではなく、用途・空気感・世界観まで考えて展示しています。",
		linkLabel: "AIビジュアルを見る",
		to: "/gallery"
	},
	{
		label: "DEVELOPMENT STORY",
		title: "無職おじさんの個人開発記録",
		text: "うまくいった話だけでなく、審査、失敗、集客の難しさ、AIとのすれ違いまで、開発途中の実感をnoteに残しています。",
		linkLabel: "noteで開発記録を読む",
		href: NOTE_URL
	}
];
var skillCards = [
	{
		title: "企画を整理する",
		text: "誰に、何を、どう届けるのか。ぼんやりしたアイデアを、作れる単位まで分解します。"
	},
	{
		title: "言葉を組み立てる",
		text: "説明文、キャッチコピー、ページ構成を、読む人が迷わない順番へ整えます。"
	},
	{
		title: "小さく形にする",
		text: "完璧を待たず、まず公開できる形へ。実際の反応を見ながら改善を重ねます。"
	},
	{
		title: "届け方まで考える",
		text: "HP、LP、SNS、note、アプリストアをつなぎ、見つけた人が次へ進める導線を設計します。"
	}
];
var principles = [
	{
		catchCopy: "便利だけで終わらせない",
		concrete: "実用性と遊び心",
		text: "役に立つことは大前提。そのうえで、使っていて愛着が湧くこと、また開きたくなる空気も大切にしています。"
	},
	{
		catchCopy: "小さく出して育てていく",
		concrete: "公開後の改善",
		text: "最初から完璧な答えを決めず、実際に使い、反応を確かめ、必要なところから少しずつ直していきます。"
	},
	{
		catchCopy: "作るだけでは届かない",
		concrete: "制作と発信の接続",
		text: "良いものを作る力と、見つけてもらう力は別です。検索、SNS、記事、問い合わせまで一つの流れとして考えます。"
	}
];
var entryCards = [
	{
		label: "MANGA APP",
		title: "漫画の管理で困っている",
		text: "所持巻、抜け巻、ダブり買いをスマホで確認したい方へ。",
		linkLabel: "漫画管理アプリ『巻ログ』へ",
		to: "/apps/kanlog",
		featured: true
	},
	{
		label: "WEB SUPPORT",
		title: "HP・LPを相談したい",
		text: "個人活動、創作、アプリ、小さなお店のWeb拠点を整えたい方へ。",
		linkLabel: "個人向けHP・LP制作へ",
		to: "/works"
	},
	{
		label: "STORY / NOTE",
		title: "個人開発の裏側を読みたい",
		text: "AIと試行錯誤しながら、アプリを公開するまでの記録を読みたい方へ。",
		linkLabel: "noteの開発記録へ",
		href: NOTE_URL
	},
	{
		label: "VISUAL LAB",
		title: "AI画像や世界観を見たい",
		text: "写真風ビジュアル、イラスト、没案や試作を見たい方へ。",
		linkLabel: "AIビジュアル実験室へ",
		to: "/gallery"
	}
];
var faqItems$2 = [
	{
		question: "ぷくりんは、どんな人ですか？",
		answer: "元議員秘書として3年間働いた後、AIを活用した個人開発を始めたPuku Labの運営者です。漫画・ラノベ管理アプリ『巻ログ』の開発、HP・LP制作、文章、AIビジュアルなどに取り組んでいます。"
	},
	{
		question: "元議員秘書の経験は、制作にどう活きていますか？",
		answer: "情報を整理すること、相手に合わせて言葉を組み直すこと、公開する情報と扱いに注意する情報を分けること、複数の予定や確認を順番に進めることに活きています。"
	},
	{
		question: "AIに全部作ってもらっているのですか？",
		answer: "AIは、アイデア整理、文章案、コード、構成を一緒に考える相棒として使っています。ただし、何を作るか、どこに違和感があるか、公開してよい状態かは自分で判断し、実際に触りながら修正しています。"
	},
	{
		question: "Puku Labには、何を相談できますか？",
		answer: "個人向けホームページ、LP、アプリ紹介ページ、ポートフォリオ、SNSやnoteを含む運営導線などを相談できます。内容がまだ固まっていない段階でも、目的と必要なページから整理します。"
	}
];
function ExperienceLink({ item }) {
	if (item.href) return /* @__PURE__ */ jsxs("a", {
		className: "aboutCardLink",
		href: item.href,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [item.linkLabel, /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			children: "↗"
		})]
	});
	return /* @__PURE__ */ jsxs(Link, {
		className: "aboutCardLink",
		to: item.to,
		children: [item.linkLabel, /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			children: "→"
		})]
	});
}
function EntryLink({ item }) {
	if (item.href) return /* @__PURE__ */ jsxs("a", {
		className: "aboutEntryAction",
		href: item.href,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [item.linkLabel, /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			children: "↗"
		})]
	});
	return /* @__PURE__ */ jsxs(Link, {
		className: "aboutEntryAction",
		to: item.to,
		children: [item.linkLabel, /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			children: "→"
		})]
	});
}
function About() {
	return /* @__PURE__ */ jsxs("main", {
		className: "aboutPage",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "aboutHero",
				"aria-labelledby": "about-main-title",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutHeroDoodles",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "aboutDoodle aboutDoodleA",
							children: "idea → build"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "aboutDoodle aboutDoodleB",
							children: "secretary / creator"
						}),
						/* @__PURE__ */ jsx("span", { className: "aboutDoodleStar aboutDoodleStarA" }),
						/* @__PURE__ */ jsx("span", { className: "aboutDoodleStar aboutDoodleStarB" }),
						/* @__PURE__ */ jsx("span", { className: "aboutDoodleLine aboutDoodleLineA" }),
						/* @__PURE__ */ jsx("span", { className: "aboutDoodleLine aboutDoodleLineB" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutHeroInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "aboutHeroCopy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "aboutEyebrow",
								children: "PUKURIN / PUKU LAB FOUNDER"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "aboutCatchCopy",
								children: "遠回りからつくる側へ"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "aboutTitle",
								id: "about-main-title",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "aboutFixedLine",
										children: "元議員秘書から"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "aboutFixedLine",
										children: "AI個人開発へ"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "aboutLead",
								children: "Puku Labを運営する「ぷくりん」のプロフィールです。 議員秘書の仕事を経て、AIを相棒にアプリ開発とホームページ制作を始めました。 漫画・ラノベ管理アプリ「巻ログ」、Puku Lab公式サイト、LP、記事、 AIビジュアルを、一つずつ試しながら形にしています。"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "aboutProofList",
								"aria-label": "ぷくりんの実績と経験",
								children: proofItems.map((item) => /* @__PURE__ */ jsx("span", { children: item }, item))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "aboutHeroActions",
								children: [
									/* @__PURE__ */ jsx(Link, {
										className: "aboutPrimaryButton",
										to: "/apps/kanlog",
										children: "公開したアプリを見る"
									}),
									/* @__PURE__ */ jsx(Link, {
										className: "aboutSecondaryButton",
										to: "/works",
										children: "HP・LP制作を見る"
									}),
									/* @__PURE__ */ jsxs("a", {
										className: "aboutTextLink",
										href: "#about-story",
										children: ["これまでの経歴を読む", /* @__PURE__ */ jsx("span", {
											"aria-hidden": "true",
											children: "↓"
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "aboutIdentityCard",
						"aria-label": "ぷくりんのプロフィール概要",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "aboutIdentityAvatar",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "aboutAvatarFace",
										children: "ぷ"
									}),
									/* @__PURE__ */ jsx("span", { className: "aboutAvatarBubble bubbleOne" }),
									/* @__PURE__ */ jsx("span", { className: "aboutAvatarBubble bubbleTwo" })
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "aboutIdentityLabel",
								children: "PROFILE NOTE"
							}),
							/* @__PURE__ */ jsx("h2", { children: "ぷくりん" }),
							/* @__PURE__ */ jsxs("p", {
								className: "aboutIdentityRole",
								children: [
									"Puku Lab運営者",
									/* @__PURE__ */ jsx("br", {}),
									"個人開発者・Web制作者"
								]
							}),
							/* @__PURE__ */ jsxs("dl", {
								className: "aboutIdentityFacts",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "前職" }), /* @__PURE__ */ jsx("dd", { children: "議員秘書" })] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "現在" }), /* @__PURE__ */ jsx("dd", { children: "AIを活用した個人開発" })] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "公開" }), /* @__PURE__ */ jsx("dd", { children: "漫画管理アプリ「巻ログ」" })] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", { children: "好き" }), /* @__PURE__ */ jsx("dd", { children: "漫画・写真・ものづくり" })] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "aboutIdentitySocials",
								children: [
									/* @__PURE__ */ jsx("a", {
										href: NOTE_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "note"
									}),
									/* @__PURE__ */ jsx("a", {
										href: X_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "X"
									}),
									/* @__PURE__ */ jsx("a", {
										href: PIXIV_URL$1,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "pixiv"
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutQuickGuide",
				"aria-label": "このページで分かること",
				children: [/* @__PURE__ */ jsx("p", {
					className: "aboutQuickGuideLabel",
					children: "このページで分かること"
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutQuickGuideGrid",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#about-story",
							children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsx("strong", { children: "どんな経歴の人か" })]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#about-proof",
							children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsx("strong", { children: "何を実際に作ったか" })]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#about-entry",
							children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsx("strong", { children: "どこから見ればよいか" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				id: "about-story",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "STORY / CAREER"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "元秘書から個人開発へ"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "aboutFixedLine",
								children: "ぷくりんが"
							}),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "aboutFixedLine",
								children: "Puku Labを始めるまで"
							})
						] }),
						/* @__PURE__ */ jsx("p", { children: "最初からエンジニアだったわけではありません。 人の活動を支える仕事から、自分のアイデアを形にする仕事へ。 その途中で身につけた整理力も、現在のものづくりに残っています。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "aboutTimeline",
					children: storySteps.map((step) => /* @__PURE__ */ jsxs("article", {
						className: "aboutTimelineItem",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aboutTimelineNumber",
							children: step.number
						}), /* @__PURE__ */ jsxs("div", {
							className: "aboutTimelineText",
							children: [
								/* @__PURE__ */ jsx("p", { children: step.label }),
								/* @__PURE__ */ jsx("h3", { children: step.title }),
								/* @__PURE__ */ jsx("span", { children: step.text })
							]
						})]
					}, step.number))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection aboutSecretarySection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSecretaryIntro",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "FORMER SECRETARY"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "伝える前に整理する"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "aboutSecretaryHeading",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "aboutFixedLine",
									children: "元議員秘書の経験が"
								}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "aboutFixedLine",
									children: "制作の土台です"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", { children: "秘書の仕事では、目立つ言葉を考える前に、事実、予定、相手、確認先を整理します。 この経験は、アプリの機能整理や、ホームページの構成、文章づくりにもつながっています。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "aboutSecretaryGrid",
					children: skillCards.map((item, index) => /* @__PURE__ */ jsxs("article", {
						className: "aboutSecretaryCard",
						children: [
							/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
							/* @__PURE__ */ jsx("h3", { children: item.title }),
							/* @__PURE__ */ jsx("p", { children: item.text })
						]
					}, item.title))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				id: "about-proof",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "PROOF / PROJECTS"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "作ったものが名刺です"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "aboutFixedLine",
								children: "Puku Labで"
							}),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "aboutFixedLine",
								children: "形にしてきたもの"
							})
						] }),
						/* @__PURE__ */ jsx("p", { children: "肩書きだけではなく、実際に公開したものと、現在も育てている場所を紹介します。 気になるものから中身を確認できます。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "aboutExperienceGrid",
					children: experienceCards.map((item) => /* @__PURE__ */ jsxs("article", {
						className: "aboutExperienceCard",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "aboutExperienceLabel",
								children: item.label
							}),
							/* @__PURE__ */ jsx("h3", { children: item.title }),
							/* @__PURE__ */ jsx("p", { children: item.text }),
							/* @__PURE__ */ jsx(ExperienceLink, { item })
						]
					}, item.title))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection aboutAiSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutAiVisual",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("span", { className: "aboutAiFlask" }),
						/* @__PURE__ */ jsx("span", { className: "aboutAiSpark sparkA" }),
						/* @__PURE__ */ jsx("span", { className: "aboutAiSpark sparkB" }),
						/* @__PURE__ */ jsx("span", {
							className: "aboutAiNote noteA",
							children: "idea"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "aboutAiNote noteB",
							children: "check"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "aboutAiNote noteC",
							children: "revise"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutAiText",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "AI × HUMAN JUDGMENT"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "AI任せにはしない"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "aboutFixedLine",
								children: "AIは答えではなく"
							}),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "aboutFixedLine",
								children: "ものづくりの相棒"
							})
						] }),
						/* @__PURE__ */ jsx("p", { children: "AIには、アイデア整理、文章案、コード、構成の壁打ちを手伝ってもらっています。 ただし、出てきたものをそのまま採用するわけではありません。" }),
						/* @__PURE__ */ jsx("p", { children: "何を作るか、誰に届けるか、どこに違和感があるか。 最後は自分で触り、確かめ、直す。 Puku Labは、人の判断とAIの速度を組み合わせて育てる研究所です。" })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "PRINCIPLES"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "つくる理由を置いておく"
						}),
						/* @__PURE__ */ jsx("h2", { children: "Puku Labが大切にしていること" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "aboutPrincipleGrid",
					children: principles.map((item, index) => /* @__PURE__ */ jsxs("article", {
						className: "aboutPrincipleCard",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "aboutPrincipleNumber",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "aboutPrincipleConcrete",
								children: item.concrete
							}),
							/* @__PURE__ */ jsx("h3", { children: item.catchCopy }),
							/* @__PURE__ */ jsx("p", { children: item.text })
						]
					}, item.catchCopy))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				id: "about-entry",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "CHOOSE YOUR ENTRY"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "気になる入口からどうぞ"
						}),
						/* @__PURE__ */ jsx("h2", { children: "あなたの目的に近いページへ" }),
						/* @__PURE__ */ jsx("p", { children: "Puku Labには、アプリ、制作相談、開発記録、AIビジュアルがあります。 いま気になっているものに近い入口を選んでください。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "aboutEntryGrid",
					children: entryCards.map((item) => /* @__PURE__ */ jsxs("article", {
						className: `aboutEntryCard ${item.featured ? "featured" : ""}`,
						children: [
							item.featured ? /* @__PURE__ */ jsx("span", {
								className: "aboutRecommended",
								children: "代表プロジェクト"
							}) : null,
							/* @__PURE__ */ jsx("p", {
								className: "aboutEntryLabel",
								children: item.label
							}),
							/* @__PURE__ */ jsx("h3", { children: item.title }),
							/* @__PURE__ */ jsx("p", { children: item.text }),
							/* @__PURE__ */ jsx(EntryLink, { item })
						]
					}, item.title))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection aboutFaqSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "QUESTIONS"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutSectionCatch",
							children: "知ってから相談できる"
						}),
						/* @__PURE__ */ jsx("h2", { children: "ぷくりんとPuku Labについて" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "aboutFaqList",
					children: faqItems$2.map((item) => /* @__PURE__ */ jsxs("details", {
						className: "aboutFaqItem",
						children: [/* @__PURE__ */ jsx("summary", { children: item.question }), /* @__PURE__ */ jsx("p", { children: item.answer })]
					}, item.question))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutFinalCta",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "aboutSectionMini",
						children: "NEXT ACTION"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "aboutFinalCatch",
						children: "つくったものから話そう"
					}),
					/* @__PURE__ */ jsx("h2", { children: "もう少しPuku Labを見てみませんか" }),
					/* @__PURE__ */ jsx("p", { children: "漫画管理アプリを試す、制作内容を見る、開発の裏側を読む。 まずは気になる場所を一つだけ、のぞいてみてください。" }),
					/* @__PURE__ */ jsxs("div", {
						className: "aboutFinalActions",
						children: [
							/* @__PURE__ */ jsx(Link, {
								className: "aboutPrimaryButton",
								to: "/apps/kanlog",
								children: "巻ログを見る"
							}),
							/* @__PURE__ */ jsx(Link, {
								className: "aboutSecondaryButton",
								to: "/works",
								children: "制作相談室を見る"
							}),
							/* @__PURE__ */ jsx(Link, {
								className: "aboutSecondaryButton",
								to: "/contact?type=works",
								children: "ぷくりんに相談する"
							})
						]
					})
				]
			})
		]
	});
}
const devLogs = [
	{
		date: "2026.04.30",
		tag: "巻ログ",
		title: "クローズドテストを突破したら、また審査だった。",
		body: "ようやくクローズドテストを突破。これでリリースだと思ったら、製品版の審査がまだ残っていた。アプリを出すまでに、いくつ門番がいるんだろう。"
	},
	{
		date: "2026.04.03",
		tag: "HP",
		title: "公開したのに、もう直したくなっている。",
		body: "公開できた達成感はある。でも整えば整うほど、次に気になる場所も増えていく。"
	},
	{
		date: "2026.04.02",
		tag: "巻ログ",
		title: "見た目が良くなると違和感も増える。",
		body: "前より良くなったはずなのに、まだ触りたくなる。たぶんもっと良くできる予感。"
	}
];
const grumbles = [
	"ようやくクローズドテスト突破！早速リリースさせようと思ったら、製品版の審査が残ってた。いくつ審査あるんだよ。",
	"AIとの意思疎通、たまに日本語の奥深さを思い知らされる。",
	"1個直すと3個直したくなる現象に名前が欲しい。",
	"無職おじさんなのに、なぜか毎日やることが多い。"
];
var secretVisuals = [{
	id: "secret-visual-001",
	title: "夏のゲーム案 01",
	image: "/gallery/secret/secret-001.png",
	alt: "夏の海辺をテーマにしたゲーム用ビジュアル案",
	text: "ゲームを作ろうとしていた時に試した、夏の海辺をテーマにしたビジュアル案です。雰囲気は好きだけど、今回は採用しなかった一枚。"
}, {
	id: "secret-visual-002",
	title: "夏のゲーム案 02",
	image: "/gallery/secret/secret-002.png",
	alt: "夏のビーチをテーマにしたゲーム用ビジュアル案",
	text: "ゲーム画面やイベント絵に使えるか試していた、少し明るめの夏ビジュアル案です。表の展示室ではなく、ひみつの部屋に保管しています。"
}];
function Secret() {
	const latestLog = devLogs[0];
	const latestGrumbles = grumbles.slice(0, 2);
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame innerPageFrame secretPage",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard secretBoard",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "pageHead secretHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "smallTag",
							children: "SECRET LOUNGE"
						}),
						/* @__PURE__ */ jsx("h2", { children: "ひみつの休憩室" }),
						/* @__PURE__ */ jsxs("p", {
							className: "secretLead",
							children: [
								"よく見つけました。",
								/* @__PURE__ */ jsx("br", {}),
								"ここは、Puku Labのすみっこにある 見つけた人だけの小さな休憩室です。"
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "secretHero",
					children: [/* @__PURE__ */ jsx("div", {
						className: "pulseOrb",
						"aria-hidden": "true"
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "secretMiniLabel",
							children: "FOUND ENTRY"
						}),
						/* @__PURE__ */ jsx("h3", { children: "来てくれてありがとう。" }),
						/* @__PURE__ */ jsx("p", { children: "表のページには置かなかった試作メモや、 少しだけ公開場所を選ぶビジュアル実験をこっそり残しています。 せっかくなので、少しだけ裏側で休んでいってください。" })
					] })]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "secretSection secretVisualSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "secretSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "secretSectionTag",
								children: "SECRET VISUAL LOG"
							}),
							/* @__PURE__ */ jsx("h3", { children: "ゲーム用に作っていた没ビジュアル" }),
							/* @__PURE__ */ jsx("p", { children: "現在ゲームを作ろうとして色々試していた中で、 採用しなかった画像をここに少しだけ展示しています。 表のギャラリーには置かない、見つけた人向けの小さな記録です。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "secretVisualGrid",
						children: secretVisuals.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "secretVisualCard",
							children: [/* @__PURE__ */ jsx("div", {
								className: "secretVisualImageWrap",
								children: /* @__PURE__ */ jsx("img", {
									src: item.image,
									alt: item.alt,
									loading: "lazy"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "secretVisualText",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "secretVisualLabel",
										children: "SECRET ARTIFACT"
									}),
									/* @__PURE__ */ jsx("h4", { children: item.title }),
									/* @__PURE__ */ jsx("p", { children: item.text })
								]
							})]
						}, item.id))
					})]
				}),
				latestLog ? /* @__PURE__ */ jsxs("section", {
					className: "secretSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "secretSectionHead",
						children: [/* @__PURE__ */ jsx("p", {
							className: "secretSectionTag",
							children: "DEV MEMO"
						}), /* @__PURE__ */ jsx("h3", { children: "最近の開発メモ" })]
					}), /* @__PURE__ */ jsxs("article", {
						className: "secretCard",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "secretCardMeta",
								children: [/* @__PURE__ */ jsx("span", { children: latestLog.date }), /* @__PURE__ */ jsx("span", { children: latestLog.tag })]
							}),
							/* @__PURE__ */ jsx("h4", { children: latestLog.title }),
							/* @__PURE__ */ jsx("p", { children: latestLog.body })
						]
					})]
				}) : null,
				/* @__PURE__ */ jsxs("section", {
					className: "secretSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "secretSectionHead",
						children: [/* @__PURE__ */ jsx("p", {
							className: "secretSectionTag",
							children: "GRUMBLE"
						}), /* @__PURE__ */ jsx("h3", { children: "無職おじさんのボヤキ" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "grumbleList",
						children: latestGrumbles.map((g, i) => /* @__PURE__ */ jsxs("div", {
							className: "grumbleItem",
							children: [/* @__PURE__ */ jsx("span", { children: "•" }), /* @__PURE__ */ jsx("p", { children: g })]
						}, i))
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "secretNote",
					children: "※ この部屋は、見つけてくれた人向けに少しずつ更新していきます。"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "pageActions secretActions",
					children: [/* @__PURE__ */ jsx(Link, {
						className: "navButton",
						to: "/gallery",
						children: "表の展示室へ"
					}), /* @__PURE__ */ jsx(Link, {
						className: "navButton ghost",
						to: "/",
						children: "ホームへ戻る"
					})]
				})
			]
		})
	});
}
var kanlog_home_default = "/assets/kanlog-home-D4NlNd3X.png";
var kanlog_shelf_default = "/assets/kanlog-shelf-CawKwHpV.png";
var kanlog_detail_default = "/assets/kanlog-detail-DcdNP24Z.png";
var kanlog_personality_default = "/assets/kanlog-personality-UqJdc2md.png";
var kanlog_promo_register_default = "/assets/kanlog-promo-register-dz9rRtjm.png";
var kanlog_promo_customize_default = "/assets/kanlog-promo-customize-D_GKnleY.png";
var kanlog_promo_personality_default = "/assets/kanlog-promo-personality-DRfvWCbu.png";
var kanlog_promo_collection_default = "/assets/kanlog-promo-collection-GUG74dsh.png";
var kanlog_promo_room_growth_default = "/assets/kanlog-promo-room-growth-BXukzOF8.png";
var PLAY_STORE_URL$1 = "https://play.google.com/store/apps/details?id=com.pukulab.makilog";
var problemCards$1 = [
	"本棚に漫画やラノベが増えて、何を持っているか分からなくなる",
	"何巻まで買ったか、どこが抜けているか忘れやすい",
	"書店で「この巻、持ってたっけ？」と迷ってしまう",
	"コレクションを見返せる場所がほしい"
];
var registerFeatures = [
	{
		title: "バーコード読み込み",
		text: "手元の本を読み込んで、コレクション登録を始めやすく。"
	},
	{
		title: "まとめて登録",
		text: "巻数が多い作品も、まとめて登録しながら本棚を育てられます。"
	},
	{
		title: "キーワード検索",
		text: "バーコードが使えないときも、作品名から探して登録できます。"
	}
];
var screenShots = [
	{
		image: kanlog_home_default,
		title: "漫画部屋の入口",
		label: "HOME",
		text: "登録したコレクションと一緒に、あなたの部屋が少しずつ育っていきます。",
		alt: "巻ログのホーム画面。漫画やラノベのコレクション管理を始める入口"
	},
	{
		image: kanlog_shelf_default,
		title: "コレクションを見える化",
		label: "SHELF",
		text: "持っている漫画やラノベを、本棚のように見返しやすく整理できます。",
		alt: "巻ログの本棚画面。登録した漫画やラノベを一覧で管理できる画面"
	},
	{
		image: kanlog_detail_default,
		title: "所持巻を確認",
		label: "DETAIL",
		text: "何巻まで持っているか、どこが抜けているかを確認しやすく。",
		alt: "巻ログの作品詳細画面。所持巻や抜け巻を確認できる画面"
	},
	{
		image: kanlog_personality_default,
		title: "相棒を自分好みに",
		label: "RUNO",
		text: "コレクション管理の相棒るのの性格を、自分好みに選べます。",
		alt: "巻ログのるの性格変更画面。相棒キャラの性格を選べる画面"
	}
];
var promoVisuals = [
	{
		image: kanlog_promo_collection_default,
		title: "漫画・ラノベをコレクション管理",
		label: "COLLECTION",
		text: "紙の本を登録して、自分だけの本棚として見返せる。",
		alt: "巻ログの紹介画像。漫画とラノベをコレクション管理できることを説明している"
	},
	{
		image: kanlog_promo_register_default,
		title: "作品ごとに登録・まとめて管理",
		label: "REGISTER",
		text: "まとめて追加も、あとから修正も、複数所持の管理もできる。",
		alt: "巻ログの紹介画像。作品ごとに登録してまとめて管理できることを説明している"
	},
	{
		image: kanlog_promo_customize_default,
		title: "管理もカスタムもしっかり",
		label: "CUSTOM",
		text: "所持巻や抜け巻の確認から、背表紙デザインのカスタムまで。",
		alt: "巻ログの紹介画像。所持巻チェックや背表紙デザインを説明している"
	},
	{
		image: kanlog_promo_personality_default,
		title: "相棒の性格を選べる",
		label: "RUNO",
		text: "お気に入りのるのと一緒に、コレクション管理をもっと楽しく。",
		alt: "巻ログの紹介画像。相棒キャラるのの性格を選べることを説明している"
	},
	{
		image: kanlog_promo_room_growth_default,
		title: "登録するほど部屋が育つ",
		label: "ROOM",
		text: "本棚や家具が増えて、コレクション管理が少しずつにぎやかに。",
		alt: "巻ログの紹介画像。本を登録するほど部屋が育つことを説明している"
	}
];
var utilityFeatures = [
	"所持巻の確認",
	"抜け巻チェック",
	"ダブり買い防止",
	"本棚・棚分け管理",
	"写真保存",
	"るのの一言"
];
var futurePlans = [
	"登録コレクションをもとにした新刊チェック",
	"AIによるおすすめ判定",
	"好みや所持傾向の見える化",
	"もっと楽しい部屋づくり"
];
function Kanlog() {
	const navigate = useNavigate();
	function scrollToSection(id) {
		const target = document.getElementById(id);
		if (!target) return;
		target.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "kanlog-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-hero",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "kanlog-heroOverlay",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "kanlog-heroText",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "kanlog-eyebrow",
								children: "KANLOG / COLLECTION MANAGEMENT APP"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "kanlog-title",
								children: [
									"漫画・ラノベの",
									/* @__PURE__ */ jsx("br", {}),
									"コレクションを",
									/* @__PURE__ */ jsx("br", {}),
									"スマホの中の",
									/* @__PURE__ */ jsx("br", {}),
									"本棚へ"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "kanlog-lead",
								children: "巻ログは、持っている漫画やラノベを登録して、 自分だけのコレクションを管理できるアプリです。 本を登録するほど部屋や本棚が育ち、 相棒るのと一緒に楽しくコレクションを増やしていけます。"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "kanlog-heroTags",
								"aria-label": "巻ログの特徴",
								children: [
									/* @__PURE__ */ jsx("span", { children: "コレクション管理" }),
									/* @__PURE__ */ jsx("span", { children: "本棚育成" }),
									/* @__PURE__ */ jsx("span", { children: "バーコード登録" }),
									/* @__PURE__ */ jsx("span", { children: "相棒るの" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "kanlog-heroActions",
								children: [/* @__PURE__ */ jsx("a", {
									className: "kanlog-button primary",
									href: PLAY_STORE_URL$1,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Google Playで巻ログを見る",
									children: "Google Playで見る"
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "kanlog-button ghost",
									onClick: () => scrollToSection("kanlog-features"),
									children: "できることを見る"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "kanlog-heroVisual",
						"aria-label": "巻ログの画面イメージ",
						children: /* @__PURE__ */ jsxs("div", {
							className: "kanlog-phoneStack",
							children: [/* @__PURE__ */ jsx("img", {
								className: "kanlog-phoneImage main",
								src: kanlog_home_default,
								alt: "巻ログのホーム画面"
							}), /* @__PURE__ */ jsx("img", {
								className: "kanlog-phoneImage sub",
								src: kanlog_shelf_default,
								alt: "巻ログの本棚画面"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-problem",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-sectionHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "COLLECTION PROBLEM"
						}),
						/* @__PURE__ */ jsx("h2", { children: "本が増えるほど、管理はむずかしくなる。" }),
						/* @__PURE__ */ jsx("p", { children: "集めるのは楽しい。けれど、漫画やラノベが増えてくると、 何を持っているか分からなくなることもあります。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-problemGrid",
					children: problemCards$1.map((item) => /* @__PURE__ */ jsxs("article", {
						className: "kanlog-problemCard",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							children: "?"
						}), /* @__PURE__ */ jsx("p", { children: item })]
					}, item))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-concept",
				id: "kanlog-features",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-conceptText",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "WHAT IS KANLOG?"
						}),
						/* @__PURE__ */ jsx("h2", { children: "巻ログは、コレクションを育てるアプリです。" }),
						/* @__PURE__ */ jsx("p", { children: "持っている本を登録して、スマホの中に自分だけの本棚を作る。 登録したコレクションを見返すことで、所持巻や抜け巻も確認しやすくなります。" }),
						/* @__PURE__ */ jsx("p", { children: "ただ記録するだけではなく、本を増やすほど部屋や本棚が育っていく。 それが巻ログのいちばん楽しいところです。" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "kanlog-conceptCard",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-cardMini",
							children: "APP CORE"
						}),
						/* @__PURE__ */ jsx("strong", { children: "登録する" }),
						/* @__PURE__ */ jsx("span", { children: "→" }),
						/* @__PURE__ */ jsx("strong", { children: "本棚が育つ" }),
						/* @__PURE__ */ jsx("span", { children: "→" }),
						/* @__PURE__ */ jsx("strong", { children: "コレクションが見える" })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-register",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-sectionHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "EASY REGISTER"
						}),
						/* @__PURE__ */ jsx("h2", { children: "たくさんあっても、登録しやすい。" }),
						/* @__PURE__ */ jsx("p", { children: "コレクション管理で最初に大変なのは、本の登録。 巻ログではバーコード読み込みやまとめて登録に対応しているので、 手元の本を少しずつスマホの本棚へ移していけます。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-featureGrid",
					children: registerFeatures.map((feature) => /* @__PURE__ */ jsxs("article", {
						className: "kanlog-featureCard",
						children: [/* @__PURE__ */ jsx("h3", { children: feature.title }), /* @__PURE__ */ jsx("p", { children: feature.text })]
					}, feature.title))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "kanlog-section kanlog-room",
				children: /* @__PURE__ */ jsxs("div", {
					className: "kanlog-roomInner",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "ROOM GROWTH"
						}),
						/* @__PURE__ */ jsx("h2", { children: "本を登録するほど、あなたの部屋が育っていく。" }),
						/* @__PURE__ */ jsx("p", { children: "巻ログでは、コレクションを増やすことがそのまま部屋の成長につながります。 ただの記録ではなく、自分の漫画部屋を少しずつ育てていく感覚で、 コレクション管理を楽しめます。" })
					] }), /* @__PURE__ */ jsxs("div", {
						className: "kanlog-roomBadge",
						children: [
							/* @__PURE__ */ jsx("span", { children: "COLLECTION" }),
							/* @__PURE__ */ jsx("strong", { children: "+" }),
							/* @__PURE__ */ jsx("span", { children: "ROOM" }),
							/* @__PURE__ */ jsx("strong", { children: "+" }),
							/* @__PURE__ */ jsx("span", { children: "RUNO" })
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-runo",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-runoText",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "PARTNER RUNO"
						}),
						/* @__PURE__ */ jsx("h2", { children: "コレクション管理の相棒、るの。" }),
						/* @__PURE__ */ jsx("p", { children: "巻ログには、あなたのコレクション管理をそばで見守る相棒「るの」がいます。 さらに、るのの性格は自分好みに変更可能。" }),
						/* @__PURE__ */ jsx("p", { children: "いつものるの、オタク友達るの、クールなるの、妹系るの、ツンデレるのなど、 気分や好みに合わせて一緒にコレクション管理を楽しめます。" }),
						/* @__PURE__ */ jsx("div", {
							className: "kanlog-runoCopy",
							children: "巻ログを最大限楽しむなら、るのも自分好みに。"
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-runoImageWrap",
					children: /* @__PURE__ */ jsx("img", {
						src: kanlog_personality_default,
						alt: "巻ログのるの性格変更画面",
						className: "kanlog-runoImage"
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-utility",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-sectionHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "USEFUL FEATURES"
						}),
						/* @__PURE__ */ jsx("h2", { children: "育てるだけじゃなく、ちゃんと便利。" }),
						/* @__PURE__ */ jsx("p", { children: "登録したコレクションをもとに、持っている巻や抜けている巻を確認。 書店で迷ったときも、巻ログを見れば 「この巻、持ってたっけ？」を確認しやすくなります。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-utilityGrid",
					children: utilityFeatures.map((feature) => /* @__PURE__ */ jsx("span", { children: feature }, feature))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-promoVisuals",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-sectionHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "PROMO VISUALS"
						}),
						/* @__PURE__ */ jsx("h2", { children: "画像で見る、巻ログでできること。" }),
						/* @__PURE__ */ jsx("p", { children: "Google Play向けに作った紹介画像を、LPにもまとめました。 登録、カスタム、相棒るの、部屋育成まで、巻ログの魅力をひと目で確認できます。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-promoGrid",
					"aria-label": "巻ログの紹介画像一覧",
					children: promoVisuals.map((visual) => /* @__PURE__ */ jsxs("article", {
						className: "kanlog-promoCard",
						children: [/* @__PURE__ */ jsx("div", {
							className: "kanlog-promoImageWrap",
							children: /* @__PURE__ */ jsx("img", {
								src: visual.image,
								alt: visual.alt,
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "kanlog-promoText",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "kanlog-promoLabel",
									children: visual.label
								}),
								/* @__PURE__ */ jsx("h3", { children: visual.title }),
								/* @__PURE__ */ jsx("p", { children: visual.text })
							]
						})]
					}, visual.title))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-screens",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-sectionHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "APP SCREENS"
						}),
						/* @__PURE__ */ jsx("h2", { children: "コレクション管理が、少し楽しくなる画面たち。" }),
						/* @__PURE__ */ jsx("p", { children: "本を登録する、見返す、部屋を育てる、るのを自分好みにする。 巻ログでは、コレクション管理を続けたくなる体験を目指しています。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-screenGrid",
					children: screenShots.map((screen) => /* @__PURE__ */ jsxs("article", {
						className: "kanlog-screenCard",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "kanlog-screenImageWrap",
								children: /* @__PURE__ */ jsx("img", {
									src: screen.image,
									alt: screen.alt
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "kanlog-screenLabel",
								children: screen.label
							}),
							/* @__PURE__ */ jsx("h3", { children: screen.title }),
							/* @__PURE__ */ jsx("p", { children: screen.text })
						]
					}, screen.title))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-future",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "kanlog-futureText",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "kanlog-label",
							children: "NEXT UPDATE IDEA"
						}),
						/* @__PURE__ */ jsx("h2", { children: "コレクション管理から、その先へ。" }),
						/* @__PURE__ */ jsx("p", { children: "巻ログは、登録したコレクションをもとに、 今後さらに便利で楽しい機能へ広げていく予定です。 新刊チェックやAIによるおすすめ判定など、 自分だけの本棚データベースとして育てていけるアプリを目指しています。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "kanlog-futureList",
					children: futurePlans.map((plan) => /* @__PURE__ */ jsx("span", { children: plan }, plan))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "kanlog-section kanlog-finalCta",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "kanlog-label",
						children: "START YOUR COLLECTION"
					}),
					/* @__PURE__ */ jsx("h2", { children: "あなたの本棚も、今日から育ててみませんか。" }),
					/* @__PURE__ */ jsx("p", { children: "まずは手元の漫画やラノベを登録して、 スマホの中に自分だけの本棚を作るところから。 相棒るのと一緒に、コレクション管理を始めてみませんか。" }),
					/* @__PURE__ */ jsxs("div", {
						className: "kanlog-finalActions",
						children: [
							/* @__PURE__ */ jsx("a", {
								className: "kanlog-button primary",
								href: PLAY_STORE_URL$1,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Google Playで巻ログを見る",
								children: "Google Playで巻ログを見る"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								className: "kanlog-button ghost",
								onClick: () => navigate("/questionnaire"),
								children: "アンケートに答える"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								className: "kanlog-button text",
								onClick: () => navigate("/apps"),
								children: "アプリ一覧へ戻る"
							})
						]
					})
				]
			})
		]
	});
}
function Game() {
	return /* @__PURE__ */ jsx("main", {
		className: "gamePage",
		children: /* @__PURE__ */ jsxs("div", {
			className: "gameBoard",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "gameEyebrow",
					children: "Puku Lab / Play Lab"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "gameTitle",
					children: "COMING SOON"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "gameLead",
					children: "ここでは、Puku Lab の実験的なWEBゲームを公開予定です。"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "gameText",
					children: [
						"るの：ゲーム実験室はまだ準備中だよ。",
						/* @__PURE__ */ jsx("br", {}),
						"もう少ししたら、この黒板から遊べるようになる予定！"
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "gameNote",
					children: [/* @__PURE__ */ jsx("span", {
						className: "gameNoteLabel",
						children: "研究メモ"
					}), /* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: "ミニゲームを今後追加予定" }),
						/* @__PURE__ */ jsx("li", { children: "世界観に合う遊び場として育成予定" }),
						/* @__PURE__ */ jsx("li", { children: "公開までは他のページから研究所を見学できます" })
					] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "gameActions",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "gameButton",
						children: "ホームへ戻る"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/apps",
						className: "gameButton ghost",
						children: "Appsを見る"
					})]
				})
			]
		})
	});
}
const galleryCategories = {
	illustrations: {
		id: "illustrations",
		path: "/gallery/illustrations",
		label: "ILLUSTRATIONS",
		title: "イラスト展示室",
		lead: "水彩・アニメ調・キャラクター絵など、Puku Labの世界観から生まれたイラストを展示していく場所です。",
		note: "水彩・アニメ調・読書少女・キャラクター系",
		folder: "/gallery/illustrations/"
	},
	"photo-style": {
		id: "photo-style",
		path: "/gallery/photo-style",
		label: "PHOTO STYLE",
		title: "写真風展示室",
		lead: "本を読む時間、静かな部屋、窓辺の光。実在しそうな空気感を意識した写真風ビジュアルを展示していく場所です。",
		note: "写真風・読書時間・リアル寄り・空気感重視",
		folder: "/gallery/photo-style/"
	},
	others: {
		id: "others",
		path: "/gallery/others",
		label: "OTHERS",
		title: "その他の記録",
		lead: "実験画像、ロゴ案、UI風画像など、分類しきれないPuku Labのビジュアル記録を残していく場所です。",
		note: "実験画像・ロゴ案・UI風・その他",
		folder: "/gallery/others/"
	}
};
const galleryItems = [
	{
		id: "photo-reading-001",
		category: "photo-style",
		title: "静かな読書時間 01",
		description: "本を読むひとときの静けさをテーマにした、Puku Labの写真風ビジュアル実験です。",
		image: "/gallery/photo-style/photo-001.png",
		alt: "室内で本を読む人物の写真風ビジュアル"
	},
	{
		id: "photo-reading-002",
		category: "photo-style",
		title: "静かな読書時間 02",
		description: "古い部屋、やわらかな光、読書に沈む空気感を意識した一枚です。",
		image: "/gallery/photo-style/photo-002.png",
		alt: "落ち着いた部屋で本を読む人物の写真風ビジュアル"
	},
	{
		id: "photo-reading-003",
		category: "photo-style",
		title: "静かな読書時間 03",
		description: "夕暮れのような光と読書の時間をテーマにした、リアル寄りのビジュアル記録です。",
		image: "/gallery/photo-style/photo-003.png",
		alt: "窓辺の光の中で本を読む人物の写真風ビジュアル"
	}
];
var PIXIV_URL = "https://www.pixiv.net/users/126319212";
var galleryCards = [
	{
		title: "写真風実験室",
		tag: "PHOTO STYLE",
		status: "展示中",
		count: `${galleryItems.filter((item) => item.category === "photo-style").length} items`,
		text: "読書時間、静かな部屋、窓辺の光。AIで作った写真風ビジュアル実験を展示しています。",
		to: "/gallery/photo-style",
		iconClass: "photo",
		iconLabel: "PHOTO",
		isOpen: true
	},
	{
		title: "イラスト実験室",
		tag: "ILLUSTRATIONS",
		status: "追加予定",
		count: "pixiv別案予定",
		text: "水彩・アニメ調・キャラクター絵など、pixiv投稿作品の別案やHP限定イラストを追加予定です。",
		to: "/gallery/illustrations",
		iconClass: "illust",
		iconLabel: "ILLUST",
		isOpen: false
	},
	{
		title: "没案・試作ログ",
		tag: "ARCHIVE LOG",
		status: "準備中",
		count: "archive plan",
		text: "没にした画像、同じテーマのフォトリアル版、ロゴ案、UI風画像などを保管していく予定です。",
		to: "/gallery/others",
		iconClass: "archive",
		iconLabel: "LOG",
		isOpen: false
	}
];
function Gallery() {
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard galleryBoard",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "galleryHero",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "smallTag",
							children: "AI VISUAL LAB / ARCHIVE"
						}),
						/* @__PURE__ */ jsx("h1", { children: "AIビジュアル実験室" }),
						/* @__PURE__ */ jsx("p", {
							className: "galleryLead",
							children: "AIを使って作ったイラストや写真風ビジュアルを、 実験結果として展示している部屋です。"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "galleryText",
							children: "pixivでは完成作品を中心に公開し、この展示室では pixivに出していない別案、没にした画像、同じテーマのフォトリアル版なども 少しずつ保管していきます。"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "galleryNotice",
					children: [/* @__PURE__ */ jsx("span", {
						className: "galleryNoticeLabel",
						children: "HP LIMITED LOG"
					}), /* @__PURE__ */ jsx("p", { children: "現在は写真風ビジュアル実験から公開中です。 AIで試したビジュアルの別案や、pixivでは見せきれない制作ログを Puku Lab側にも少しずつ残していきます。" })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "galleryCardGrid",
					children: galleryCards.map((card) => /* @__PURE__ */ jsxs(Link, {
						className: `galleryCard galleryCardLink ${card.isOpen ? "galleryCardOpen" : "galleryCardPreparing"}`,
						to: card.to,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "galleryCardTop",
								children: [/* @__PURE__ */ jsx("p", {
									className: "galleryCardTag",
									children: card.tag
								}), /* @__PURE__ */ jsx("span", {
									className: "galleryStatusBadge",
									children: card.status
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: `galleryIconBox ${card.iconClass}`,
								"aria-hidden": "true",
								children: [/* @__PURE__ */ jsx("span", { className: "galleryIconShape" }), /* @__PURE__ */ jsx("span", {
									className: "galleryIconLabel",
									children: card.iconLabel
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "galleryCardMeta",
								children: [/* @__PURE__ */ jsx("span", { children: card.status }), /* @__PURE__ */ jsx("span", { children: card.count })]
							}),
							/* @__PURE__ */ jsx("h2", { children: card.title }),
							/* @__PURE__ */ jsx("p", { children: card.text })
						]
					}, card.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "galleryActions",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/gallery/photo-style",
							className: "galleryButton",
							children: "写真風実験室を見る"
						}),
						/* @__PURE__ */ jsx("a", {
							href: PIXIV_URL,
							className: "galleryButton",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "pixivを見る"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/apps/kanlog",
							className: "galleryButton",
							children: "巻ログを見る"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "galleryButton galleryButtonGhost",
							children: "ホームへ戻る"
						})
					]
				})
			]
		})
	});
}
function GalleryCategory({ category }) {
	const currentCategory = galleryCategories[category];
	const items = galleryItems.filter((item) => item.category === category);
	if (!currentCategory) return /* @__PURE__ */ jsx("main", {
		className: "siteFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard galleryCategoryBoard",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "smallTag",
					children: "PUKU LAB VISUAL ARCHIVE"
				}),
				/* @__PURE__ */ jsx("h1", { children: "展示室が見つかりません" }),
				/* @__PURE__ */ jsx("p", {
					className: "galleryCategoryLead",
					children: "指定された展示室はまだ準備されていないようです。"
				}),
				/* @__PURE__ */ jsx(Link, {
					className: "galleryBackLink",
					to: "/gallery",
					children: "展示室トップへ戻る"
				})
			]
		})
	});
	const otherCategories = Object.values(galleryCategories).filter((item) => item.id !== currentCategory.id);
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard galleryCategoryBoard",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "galleryCategoryDoodles",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "galleryCategoryNote noteA",
							children: "visual log"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "galleryCategoryNote noteB",
							children: "archive"
						}),
						/* @__PURE__ */ jsx("span", { className: "galleryCategoryCircle circleA" }),
						/* @__PURE__ */ jsx("span", { className: "galleryCategoryCircle circleB" }),
						/* @__PURE__ */ jsx("span", { className: "galleryCategoryLine lineA" }),
						/* @__PURE__ */ jsx("span", { className: "galleryCategoryLine lineB" })
					]
				}),
				/* @__PURE__ */ jsxs("header", {
					className: "galleryCategoryHero",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "smallTag",
							children: ["PUKU LAB / ", currentCategory.label]
						}),
						/* @__PURE__ */ jsx("h1", { children: currentCategory.title }),
						/* @__PURE__ */ jsx("p", {
							className: "galleryCategoryLead",
							children: currentCategory.lead
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "galleryCategoryMeta",
							children: [/* @__PURE__ */ jsx("span", { children: currentCategory.note }), /* @__PURE__ */ jsxs("span", { children: [items.length, " items"] })]
						})
					]
				}),
				items.length > 0 ? /* @__PURE__ */ jsx("section", {
					className: "galleryItemGrid",
					"aria-label": "展示画像一覧",
					children: items.map((item) => /* @__PURE__ */ jsxs("article", {
						className: "galleryItemCard",
						children: [/* @__PURE__ */ jsx("div", {
							className: "galleryImageWrap",
							children: /* @__PURE__ */ jsx("img", {
								src: item.image,
								alt: item.alt,
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "galleryItemText",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "galleryItemLabel",
									children: currentCategory.label
								}),
								/* @__PURE__ */ jsx("h2", { children: item.title }),
								/* @__PURE__ */ jsx("p", { children: item.description })
							]
						})]
					}, item.id))
				}) : /* @__PURE__ */ jsxs("section", {
					className: "galleryEmptyState",
					"aria-label": "展示準備中",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "galleryEmptyLabel",
							children: "NOW PREPARING"
						}),
						/* @__PURE__ */ jsx("h2", { children: "この展示室は準備中です。" }),
						/* @__PURE__ */ jsx("p", { children: "画像を追加すると、このページに展示されます。 まずはページだけ開通して、Puku Labのビジュアルアーカイブとして育てていきます。" }),
						/* @__PURE__ */ jsx("code", { children: currentCategory.folder })
					]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "galleryCategoryNav",
					"aria-label": "展示室カテゴリ",
					children: [/* @__PURE__ */ jsx(Link, {
						className: "galleryBackLink",
						to: "/gallery",
						children: "展示室トップへ"
					}), /* @__PURE__ */ jsx("div", {
						className: "galleryOtherLinks",
						children: otherCategories.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.path,
							children: item.title
						}, item.id))
					})]
				})
			]
		})
	});
}
var keywordBadges = [
	"ホームページ制作",
	"LP制作",
	"個人向けHP",
	"小規模サイト",
	"アプリ紹介ページ",
	"ポートフォリオ制作",
	"SNS導線整理",
	"全国オンライン対応"
];
var targetUsers = [
	{
		title: "個人開発者",
		text: "アプリやWebサービスの紹介ページ、Google PlayやSNSへの導線を整えたい人。"
	},
	{
		title: "創作者・発信者",
		text: "X、note、pixiv、作品ページなどをつなぐ活動拠点がほしい人。"
	},
	{
		title: "小さなお店・個人活動",
		text: "大きな制作会社に頼むほどではないけど、ちゃんと見せるHPがほしい人。"
	},
	{
		title: "世界観を整理したい人",
		text: "文章、画像、見せ方、導線まで含めて一緒に考えてほしい人。"
	}
];
var productCards = [
	{
		title: "個人活動用ホームページ制作",
		label: "HOME PAGE",
		text: "活動内容、プロフィール、サービス内容、リンク、問い合わせ先をまとめた小さな拠点を作ります。"
	},
	{
		title: "アプリ・サービス紹介LP制作",
		label: "APP / SERVICE LP",
		text: "アプリやWebサービスの魅力、使い方、料金、ダウンロード導線を1ページで伝える紹介ページを作ります。"
	},
	{
		title: "作品・ポートフォリオページ",
		label: "PORTFOLIO",
		text: "イラスト、写真、文章、制作物などを見やすくまとめるポートフォリオページを整えます。"
	},
	{
		title: "SNS・note・pixiv導線整理",
		label: "ROUTE DESIGN",
		text: "バラバラになりがちな発信場所をつなぎ、見に来た人が迷わない導線を作ります。"
	}
];
var serviceCards = [
	{
		title: "HP制作",
		label: "WEB SITE",
		text: "個人活動・小さなお店・作品紹介など、最初の拠点になるホームページを作ります。"
	},
	{
		title: "LP制作",
		label: "LANDING PAGE",
		text: "アプリ、サービス、イベント、企画などを分かりやすく伝えるランディングページを整えます。"
	},
	{
		title: "運営導線サポート",
		label: "GROWTH ROUTE",
		text: "X、note、pixiv、アプリ、問い合わせなどをつなぎ、見に来た人が迷わない導線を考えます。"
	},
	{
		title: "AI制作サポート",
		label: "AI CREATIVE",
		text: "AIを使った画像案、文章案、世界観づくり、更新ネタづくりまで一緒に整理します。"
	}
];
var seoSupportCards = [
	{
		title: "検索される言葉をページ内に整理",
		text: "HP制作、LP制作、アプリ紹介ページ、個人向けホームページなど、探している人が使いそうな言葉を自然に入れます。"
	},
	{
		title: "問い合わせまでの導線を設計",
		text: "見に来た人が、料金・制作内容・実績・相談先を迷わず確認できるようにページ構成を整えます。"
	},
	{
		title: "SNSや外部サービスと接続",
		text: "X、note、pixiv、Google Play、作品ページなどをつなぎ、活動全体の入口と出口を作ります。"
	},
	{
		title: "公開後も育てやすい形にする",
		text: "作って終わりではなく、反応を見ながら文章や導線を改善しやすいホームページにします。"
	}
];
var pricePlans = [
	{
		title: "既存ページの見直し・文章整理",
		price: "3万〜8万円",
		text: "今あるページの構成、文章、導線を見直して、伝わりやすく整えます。"
	},
	{
		title: "1ページLP制作 ライト",
		price: "8万〜15万円",
		text: "文章と構成を絞った、シンプルな紹介ページを制作します。"
	},
	{
		title: "1ページLP制作 標準",
		price: "15万〜28万円",
		text: "構成、文章、デザイン、導線までしっかり整えるLP制作です。"
	},
	{
		title: "小規模HP制作 3〜5ページ",
		price: "18万〜35万円",
		text: "トップ、紹介、実績、問い合わせなどを含む小さなホームページ制作です。"
	},
	{
		title: "アプリ・サービス紹介LP",
		price: "12万〜25万円",
		text: "アプリ画面や機能説明を整理し、ダウンロードや問い合わせにつなげます。"
	},
	{
		title: "運営導線サポート",
		price: "月2万〜5万円",
		text: "SNS、note、pixiv、アプリ、HPの導線や更新方針を一緒に整えます。"
	},
	{
		title: "AI制作サポート",
		price: "2万〜8万円",
		text: "AI画像、文章案、世界観づくり、告知用素材の方向性を一緒に作ります。"
	}
];
var worksCases = [
	{
		title: "Puku Lab 公式サイト",
		label: "OFFICIAL SITE",
		text: "黒板内の2D研究室をテーマに、アプリ・AI画像・制作相談をつなぐ拠点として制作。"
	},
	{
		title: "Puku Lab 制作相談室",
		label: "WORKS LP",
		text: "HP制作・LP制作・料金目安・問い合わせ導線をまとめた、Puku Labの営業用LPとして制作。"
	},
	{
		title: "AIビジュアル実験室",
		label: "GALLERY",
		text: "AIで作ったビジュアル実験を展示し、pixivやPuku Lab内への回遊導線を設計。"
	},
	{
		title: "外部制作実績",
		label: "COMING SOON",
		text: "これから制作相談やサポート事例が増えたら、ここに少しずつ追加していきます。"
	}
];
var appCases = [{
	title: "巻ログ",
	label: "APP / GOOGLE PLAY",
	text: "漫画・ラノベ管理アプリを企画・制作し、Google Play公開まで実施。機能設計、UI、世界観づくりまで含めた個人開発アプリです。"
}, {
	title: "巻ログ 紹介LP",
	label: "APP LP / ROUTE",
	text: "アプリの魅力、画面説明、Google Playへの導線、相棒るのの世界観を整理したアプリ紹介LPとして制作。"
}];
var processSteps = [
	{
		title: "相談する",
		text: "作りたいもの、困っていること、見せたい世界観を聞かせてください。"
	},
	{
		title: "方向性を決める",
		text: "ページ構成、必要な内容、導線、料金目安を一緒に整理します。"
	},
	{
		title: "小さく作る",
		text: "最初から作り込みすぎず、公開できる形まで丁寧に作ります。"
	},
	{
		title: "公開後に育てる",
		text: "反応を見ながら、文章・導線・見せ方を少しずつ改善していきます。"
	}
];
var faqItems$1 = [
	{
		question: "個人でもホームページ制作を相談できますか？",
		answer: "はい。個人開発者、創作者、個人活動、小さなお店など、大きな制作会社に頼むほどではない規模のホームページ制作やLP制作を想定しています。"
	},
	{
		question: "アプリ紹介ページやサービス紹介LPも作れますか？",
		answer: "対応できます。アプリの特徴、画面説明、料金、Google Playや問い合わせへの導線を整理し、1ページで伝わる紹介LPとして制作します。"
	},
	{
		question: "文章や構成がまだ決まっていなくても相談できますか？",
		answer: "大丈夫です。作りたいものがふわっとしている段階でも、誰に何を届けたいか、どのページが必要か、どんな導線にするかを一緒に整理します。"
	},
	{
		question: "遠方からでも依頼できますか？",
		answer: "はい。ホームページ制作やLP制作はオンラインで全国から相談できます。やり取りしながら、必要な情報やページ構成を一緒に整理します。"
	}
];
function Works() {
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame innerPageFrame worksPage",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard worksBoard",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "pageHead worksHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "smallTag",
							children: "WORKS / SUPPORT LAB"
						}),
						/* @__PURE__ */ jsx("h1", { children: "HP制作・LP制作の制作相談室" }),
						/* @__PURE__ */ jsx("p", { children: "黒板の中の2D研究室から、個人開発者・創作者・小さなお店向けに、 ホームページ制作、LP制作、アプリ紹介ページ、運営導線づくりをお手伝いします。" })
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksHero",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksHeroIcon",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ jsx("span", { className: "worksHeroPaper" }),
							/* @__PURE__ */ jsx("span", { className: "worksHeroScreen" }),
							/* @__PURE__ */ jsx("span", { className: "worksHeroPencil" }),
							/* @__PURE__ */ jsx("span", { className: "worksHeroRuler" }),
							/* @__PURE__ */ jsx("span", { className: "worksHeroStar" }),
							/* @__PURE__ */ jsx("span", { className: "worksHeroBubble bubbleA" }),
							/* @__PURE__ */ jsx("span", { className: "worksHeroBubble bubbleB" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "worksHeroText",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksMiniLabel",
								children: "SMALL WEB SUPPORT"
							}),
							/* @__PURE__ */ jsx("h2", { children: "小さく作って、少しずつ育てる。" }),
							/* @__PURE__ */ jsx("p", { children: "Puku Labでは、ただページを作るだけではなく、 「何を見せるか」「どこへ案内するか」「どう続けるか」まで含めて考えます。" }),
							/* @__PURE__ */ jsx("p", { children: "個人開発、創作活動、小さなお店、イベント告知など、 まずは小さな拠点を作りたい時に相談できる制作室です。" }),
							/* @__PURE__ */ jsxs("div", {
								className: "worksHeroActions",
								children: [/* @__PURE__ */ jsx(Link, {
									className: "navButton",
									to: "/contact?type=works",
									children: "相談してみる"
								}), /* @__PURE__ */ jsx("a", {
									className: "navButton ghost",
									href: "#works-price",
									children: "料金目安を見る"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSeoIntro",
					"aria-label": "制作相談室の対応内容",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "worksSectionTag",
							children: "SEO / SEARCH WORDS"
						}),
						/* @__PURE__ */ jsx("h2", { children: "個人向けホームページ制作・小規模LP制作を、相談しやすい形で。" }),
						/* @__PURE__ */ jsx("p", { children: "Puku Labの制作相談室では、ホームページ制作、LP制作、アプリ紹介ページ制作、 ポートフォリオ制作、SNS導線整理などをまとめて相談できます。 オンラインで全国の個人開発者・創作者・小さなお店の Web制作をサポートします。" }),
						/* @__PURE__ */ jsx("div", {
							className: "worksKeywordList",
							"aria-label": "対応キーワード",
							children: keywordBadges.map((keyword) => /* @__PURE__ */ jsx("span", { children: keyword }, keyword))
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "FOR YOU"
							}),
							/* @__PURE__ */ jsx("h2", { children: "こんな人に向いています" }),
							/* @__PURE__ */ jsx("p", { children: "大きな制作会社に頼むほどではないけれど、 自分の活動やサービスをちゃんと見せる場所がほしい人向けです。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksTargetGrid",
						children: targetUsers.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "worksTargetCard",
							children: [/* @__PURE__ */ jsx("h3", { children: item.title }), /* @__PURE__ */ jsx("p", { children: item.text })]
						}, item.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "WHAT WE MAKE"
							}),
							/* @__PURE__ */ jsx("h2", { children: "制作できるもの" }),
							/* @__PURE__ */ jsx("p", { children: "HP単体だけでなく、SNS・note・pixiv・アプリストアなど、 活動全体の入口と出口をつなぐことを大切にしています。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksProductGrid",
						children: productCards.map((card) => /* @__PURE__ */ jsxs("article", {
							className: "worksProductCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: card.label }),
								/* @__PURE__ */ jsx("h3", { children: card.title }),
								/* @__PURE__ */ jsx("span", { children: card.text })
							]
						}, card.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection worksSearchSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "SEARCH SUPPORT"
							}),
							/* @__PURE__ */ jsx("h2", { children: "検索で見つけてもらうために整えること" }),
							/* @__PURE__ */ jsx("p", { children: "SEOは魔法ではありません。けれど、ページの目的・見出し・文章・導線を整理することで、 「探している人」に伝わりやすいページへ近づけられます。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksSeoGrid",
						children: seoSupportCards.map((card) => /* @__PURE__ */ jsxs("article", {
							className: "worksSeoCard",
							children: [/* @__PURE__ */ jsx("h3", { children: card.title }), /* @__PURE__ */ jsx("p", { children: card.text })]
						}, card.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [/* @__PURE__ */ jsx("p", {
							className: "worksSectionTag",
							children: "MENU"
						}), /* @__PURE__ */ jsx("h2", { children: "お手伝いできること" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksServiceGrid",
						children: serviceCards.map((card) => /* @__PURE__ */ jsxs("article", {
							className: "worksServiceCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: card.label }),
								/* @__PURE__ */ jsx("h3", { children: card.title }),
								/* @__PURE__ */ jsx("span", { children: card.text })
							]
						}, card.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection worksPriceSection",
					id: "works-price",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "PRICE GUIDE"
							}),
							/* @__PURE__ */ jsx("h2", { children: "料金の目安" }),
							/* @__PURE__ */ jsx("p", { children: "料金は内容・ページ数・素材の有無によって変わります。 下記は相談前にイメージしやすくするための目安です。 正式なお見積もりと請求書の金額は、作業範囲を確認してから決定します。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksPriceGrid",
						children: pricePlans.map((plan) => /* @__PURE__ */ jsxs("article", {
							className: "worksPriceCard",
							children: [
								/* @__PURE__ */ jsx("h3", { children: plan.title }),
								/* @__PURE__ */ jsx("strong", { children: plan.price }),
								/* @__PURE__ */ jsx("p", { children: plan.text })
							]
						}, plan.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "WORKS"
							}),
							/* @__PURE__ */ jsx("h2", { children: "制作実績" }),
							/* @__PURE__ */ jsx("p", { children: "現在は自分のプロジェクトを中心に制作しています。 Puku Lab自体も、HP制作・LP制作・導線設計の実績として育てています。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksCaseGrid",
						children: worksCases.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "worksCaseCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: item.label }),
								/* @__PURE__ */ jsx("h3", { children: item.title }),
								/* @__PURE__ */ jsx("span", { children: item.text })
							]
						}, item.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "APP CASE"
							}),
							/* @__PURE__ */ jsx("h2", { children: "アプリ開発・LP実績" }),
							/* @__PURE__ */ jsx("p", { children: "Webページだけでなく、実際に公開しているアプリと、 その紹介LP・HP導線まで含めて制作しています。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksCaseGrid worksAppCaseGrid",
						children: appCases.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "worksCaseCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: item.label }),
								/* @__PURE__ */ jsx("h3", { children: item.title }),
								/* @__PURE__ */ jsx("span", { children: item.text })
							]
						}, item.title))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "worksSectionHead",
							children: [/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "FLOW"
							}), /* @__PURE__ */ jsx("h2", { children: "進め方" })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "worksFlow",
							children: processSteps.map((step, index) => /* @__PURE__ */ jsxs("div", {
								className: "worksFlowStep",
								children: [
									/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
									/* @__PURE__ */ jsx("strong", { children: step.title }),
									/* @__PURE__ */ jsx("p", { children: step.text })
								]
							}, step.title))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "worksNote",
							children: "いきなり大きく作り込むより、まずは見える形にして、 反応を見ながら少しずつ育てる進め方を大切にしています。"
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksSection worksFaqSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "FAQ"
							}),
							/* @__PURE__ */ jsx("h2", { children: "よくある質問" }),
							/* @__PURE__ */ jsx("p", { children: "ホームページ制作やLP制作の相談前に、気になりやすいことをまとめました。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksFaqList",
						children: faqItems$1.map((item) => /* @__PURE__ */ jsxs("details", {
							className: "worksFaqItem",
							children: [/* @__PURE__ */ jsx("summary", { children: item.question }), /* @__PURE__ */ jsx("p", { children: item.answer })]
						}, item.question))
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "worksCta",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "worksSectionTag",
							children: "CONTACT"
						}),
						/* @__PURE__ */ jsx("h2", { children: "HP制作や運営まわりで困っていたら" }),
						/* @__PURE__ */ jsx("p", { children: "「まだふわっとしている」くらいの段階でも大丈夫です。 どんなページにしたいか、何を届けたいかを一緒に整理します。" }),
						/* @__PURE__ */ jsxs("div", {
							className: "pageActions worksActions",
							children: [/* @__PURE__ */ jsx(Link, {
								className: "navButton",
								to: "/contact?type=works",
								children: "相談してみる"
							}), /* @__PURE__ */ jsx(Link, {
								className: "navButton ghost",
								to: "/",
								children: "ホームへ戻る"
							})]
						})
					]
				})
			]
		})
	});
}
var workItems = [{
	label: "WEB SUPPORT",
	title: "HP・LP制作",
	text: "個人開発者・創作者・小さなお店向けに、ホームページやLP、アプリ紹介ページ、Web導線づくりをお手伝いします。",
	status: "AVAILABLE",
	to: "/works/web",
	button: "制作相談室を見る",
	accent: "mint"
}, {
	label: "ENTSUGUMI / SNS SUPPORT",
	title: "縁紡",
	text: "地方議員の日々の活動・予定・原稿・SNS発信を、ひとつの流れで支える情報発信支援サービスです。",
	status: "FIELD TEST",
	to: "/entsumugi",
	button: "縁紡を見る",
	accent: "amber"
}];
function WorksIndex() {
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame innerPageFrame worksIndexPage",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard worksIndexBoard",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "pageHead worksIndexHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "smallTag",
							children: "WORKS / SERVICE LAB"
						}),
						/* @__PURE__ */ jsx("h1", { children: "Puku Labの仕事" }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Puku Labから生まれた制作支援やサービスを紹介しています。",
							/* @__PURE__ */ jsx("br", {}),
							"気になる入口から、それぞれの詳しいページへ進めます。"
						] })
					]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "worksIndexGrid",
					"aria-label": "Puku Labのサービス一覧",
					children: workItems.map((item) => /* @__PURE__ */ jsxs(Link, {
						className: `worksIndexCard worksIndexCard-${item.accent}`,
						to: item.to,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "worksIndexCardTop",
								children: [/* @__PURE__ */ jsx("p", { children: item.label }), /* @__PURE__ */ jsx("span", { children: item.status })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "worksIndexIcon",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ jsx("span", { className: "worksIndexIconPaper" }),
									/* @__PURE__ */ jsx("span", { className: "worksIndexIconLine lineOne" }),
									/* @__PURE__ */ jsx("span", { className: "worksIndexIconLine lineTwo" }),
									/* @__PURE__ */ jsx("span", { className: "worksIndexIconDot dotOne" }),
									/* @__PURE__ */ jsx("span", { className: "worksIndexIconDot dotTwo" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "worksIndexCardText",
								children: [
									/* @__PURE__ */ jsx("h2", { children: item.title }),
									/* @__PURE__ */ jsx("p", { children: item.text }),
									/* @__PURE__ */ jsxs("span", {
										className: "worksIndexAction",
										children: [item.button, " →"]
									})
								]
							})
						]
					}, item.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "worksIndexMemo",
					children: [/* @__PURE__ */ jsx("p", { children: "WORKS MEMO" }), /* @__PURE__ */ jsx("strong", { children: "制作支援と自社サービスを、それぞれ独立したページで育てていきます。" })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pageActions worksIndexFooterActions",
					children: /* @__PURE__ */ jsx(Link, {
						className: "navButton ghost",
						to: "/",
						children: "ホームへ戻る"
					})
				})
			]
		})
	});
}
var entsumugi_pc_default = "/assets/entsumugi-pc-CSXG8HF9.png";
var entsumugi_mobile_default = "/assets/entsumugi-mobile-Dz6wXJQP.png";
var SERVICE_URL = "https://entsumugi.pukulab.com/";
var problemCards = [
	{
		number: "01",
		title: "活動していても 知られなければ伝わらない",
		text: "議会活動や地域活動を続けていても、市民が自分から情報を探しに来るとは限りません。"
	},
	{
		number: "02",
		title: "発信まで手が回らない",
		text: "議会、地域行事、相談対応、日程調整。SNSだけに時間を使えないのが議員活動の現実です。"
	},
	{
		number: "03",
		title: "写真や予定が 発信につながらない",
		text: "写真はスマホ、予定は手帳、連絡はLINE。情報が散らばるほど、投稿準備の手間も増えていきます。"
	}
];
var flowSteps = [
	{
		number: "01",
		label: "SHARE",
		title: "予定・写真を共有",
		text: "外出先はスマホ、事務所はPC。活動や写真を縁紡に共有します。"
	},
	{
		number: "02",
		label: "DRAFT",
		title: "原稿を準備",
		text: "共有された内容をもとに、発信するための原稿や素材を準備します。"
	},
	{
		number: "03",
		label: "APPROVE",
		title: "本人が確認",
		text: "公開前に内容を確認。承認・修正依頼など、最後の判断は議員本人が行います。"
	},
	{
		number: "04",
		label: "PUBLISH",
		title: "各媒体へ発信",
		text: "確認後は、X・Instagram・LINEなど媒体の役割に合わせて発信へつなげます。"
	}
];
var features = [
	["予定・活動管理", "日・週・月の予定と日々の活動記録をまとめ、発信準備の起点にできます。"],
	["AI秘書", "日程・相談案件・原稿づくりなど、日々の事務作業をAIで補助します。"],
	["原稿・発信管理", "原稿作成、本人確認、修正依頼、投稿予定・投稿済みまで流れを確認できます。"],
	["写真・動画・資料共有", "現場の素材をその場で送り、原稿や活動記録、制作素材につなげます。"],
	["相談・領収書管理", "相談・要望の対応状況や領収書を記録し、事務所内の情報を整理できます。"],
	["リンク・情報整理", "HP、LINE、Driveなど、よく使う外部サービスへの入口もまとめられます。"]
];
var aiActions = [
	["日程", "予定の確認・登録、空き時間の確認"],
	["案件", "相談・要望の確認と整理"],
	["原稿", "作成・修正・投稿準備をサポート"],
	["共有", "Puku Labへ素材を送る流れを案内"],
	["登録", "必要な情報を自分用に保存"],
	["その他", "問い合わせや設定などを相談"]
];
var trustItems = [
	{
		title: "共有範囲を分けて管理",
		text: "情報は「事務所内のみ」と「サポート共有」を分けて扱える設計です。すべての情報が自動でPuku Labへ共有されるわけではありません。"
	},
	{
		title: "役割ごとに使い方を分ける",
		text: "議員本人、事務所スタッフ、Puku Lab側で役割を分け、必要な情報と操作にアクセスする前提で設計しています。"
	},
	{
		title: "公開前の最終判断は本人",
		text: "原稿は確認画面から承認・修正依頼ができ、公開前の最終判断を議員本人が行える流れを用意しています。"
	}
];
var onboardingSteps = [
	[
		"01",
		"まず相談",
		"現在のSNS運用、事務所体制、困っていることを確認します。"
	],
	[
		"02",
		"支援範囲を決める",
		"アプリだけ、AI秘書、運用代行など、必要な範囲を一緒に整理します。"
	],
	[
		"03",
		"初期設定",
		"事務所情報や利用環境、必要に応じてSNS・LINE・HPなどを整えます。"
	],
	[
		"04",
		"運用開始",
		"予定や活動を登録しながら、日々の情報発信へつなげていきます。"
	]
];
var faqItems = [
	{
		q: "遠方でも利用できますか？",
		a: "はい。縁紡はPC・スマートフォンを使い、オンライン中心で情報共有と運用支援を進められるように設計しています。"
	},
	{
		q: "投稿前に内容を確認できますか？",
		a: "できます。原稿確認画面から内容を確認し、承認または修正依頼を出せます。"
	},
	{
		q: "投稿は自分で行うこともできますか？",
		a: "できます。本人・事務所で投稿する運用と、Puku Lab側へ投稿を任せる運用を、支援内容に合わせて整理できます。"
	},
	{
		q: "すでにSNSアカウントがありますが利用できますか？",
		a: "はい。既存アカウントを確認して運用を始める形にも対応しています。新規立ち上げが必要な媒体だけ追加することもできます。"
	},
	{
		q: "どの媒体を扱えますか？",
		a: "X、Facebook、Instagram、YouTube Shorts、公式LINE、HP活動報告などを想定しています。実際の運用媒体は現在の発信状況を見ながら決めます。"
	},
	{
		q: "相談や領収書を登録すると、Puku Labにも全部見えますか？",
		a: "いいえ。事務所内だけで扱う情報と、運用支援のために共有する情報を分ける設計です。共有範囲は内容に応じて管理します。"
	}
];
var pricingGroups = [
	{
		label: "SELF / AI",
		title: "自分で管理する",
		price: "1,980〜25,000",
		unit: "円 / 月",
		text: "アプリだけ使う方法から、AI秘書を使って自分で運用する方法まで。",
		notes: [
			"アプリ利用のみ 1,980円",
			"AI秘書コース 25,000円",
			"AI利用回数追加 1,000円 / 枠"
		]
	},
	{
		label: "MONTHLY SUPPORT",
		title: "継続して任せる",
		price: "66,000〜148,000",
		unit: "円 / 月",
		text: "原稿・投稿から、媒体ごとの企画や広報全体まで、必要な範囲を継続支援。",
		notes: [
			"基本運用 66,000円",
			"広報運用 99,000円",
			"外部広報室 148,000円"
		],
		featured: true
	},
	{
		label: "ONE SHOT",
		title: "必要な時だけ頼む",
		price: "3,300〜",
		unit: "円 / 回",
		text: "原稿、画像、動画、LINE、HP更新など、必要な制作だけ個別に依頼できます。",
		notes: ["SNS原稿 3,300円〜", "動画・WEB制作にも対応"]
	}
];
function Entsumugi() {
	return /* @__PURE__ */ jsxs("main", {
		className: "enPage",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "enHeader",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enHeaderInner",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/entsumugi",
							className: "enBrand",
							"aria-label": "縁紡トップへ",
							children: [/* @__PURE__ */ jsx("strong", { children: "縁紡" }), /* @__PURE__ */ jsx("span", { children: "議員サポートデスク" })]
						}),
						/* @__PURE__ */ jsxs("nav", {
							className: "enNav",
							"aria-label": "縁紡ページ内ナビ",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "#about",
									children: "縁紡とは"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#flow",
									children: "仕組み"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#features",
									children: "機能"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#ai-secretary",
									children: "AI秘書"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#price",
									children: "料金"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/entsumugi/startup",
									children: "候補者向け"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enHeaderActions",
							children: [/* @__PURE__ */ jsx("a", {
								className: "enLoginLink",
								href: SERVICE_URL,
								target: "_blank",
								rel: "noreferrer",
								children: "ご利用中の方"
							}), /* @__PURE__ */ jsx(Link, {
								className: "enHeaderCta",
								to: "/contact?type=entsumugi",
								children: "相談する"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enHero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enHeroInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enHeroCopy",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "enPills",
								children: [/* @__PURE__ */ jsx("span", { children: "地方議員向け" }), /* @__PURE__ */ jsx("span", { children: "実証運用中" })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "ENTSUMUGI / PUBLIC COMMUNICATION SUPPORT"
							}),
							/* @__PURE__ */ jsxs("h1", { children: [/* @__PURE__ */ jsx("span", { children: "議員活動を" }), /* @__PURE__ */ jsx("strong", { children: "発信につなげる" })] }),
							/* @__PURE__ */ jsx("p", {
								className: "enLead",
								children: "対面で会わなくても、SNS運用を任せられる。PC・スマートフォン・縁紡をつなぎ、日々の活動から継続的な情報発信まで支えます。"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enHeroTags",
								"aria-label": "縁紡の主な特徴",
								children: [
									/* @__PURE__ */ jsx("span", { children: "SNS運用代行" }),
									/* @__PURE__ */ jsx("span", { children: "専用アプリ" }),
									/* @__PURE__ */ jsx("span", { children: "AI秘書" }),
									/* @__PURE__ */ jsx("span", { children: "原稿制作" }),
									/* @__PURE__ */ jsx("span", { children: "情報共有" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enHeroActions",
								children: [/* @__PURE__ */ jsxs(Link, {
									className: "enButton primary",
									to: "/contact?type=entsumugi",
									children: ["まずは相談する ", /* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										children: "→"
									})]
								}), /* @__PURE__ */ jsx(Link, {
									className: "enButton secondary",
									to: "/entsumugi/diagnosis",
									children: "30秒コース診断"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enNote",
								children: "現在、地方議員との実証運用を通じてサービス改善を進めています。"
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enHeroVisual",
						"aria-label": "縁紡のPC版とスマートフォン版の画面",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "enPcFrame",
								children: /* @__PURE__ */ jsx("img", {
									src: entsumugi_pc_default,
									alt: "縁紡のPC版ホーム画面"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "enPhoneFrame",
								children: /* @__PURE__ */ jsx("img", {
									src: entsumugi_mobile_default,
									alt: "縁紡のスマートフォン版ホーム画面"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enVisualBadge",
								children: [/* @__PURE__ */ jsx("b", { children: "01" }), /* @__PURE__ */ jsxs("span", { children: [
									"スマホで共有",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("strong", { children: "→ PC・縁紡へ" })
								] })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enMiniFlow",
				"aria-label": "縁紡の基本フロー",
				children: /* @__PURE__ */ jsx("div", {
					className: "enMiniFlowInner",
					children: [
						"共有",
						"作成",
						"承認",
						"投稿"
					].map((label, index) => /* @__PURE__ */ jsxs("div", {
						className: "enMiniFlowUnit",
						children: [
							/* @__PURE__ */ jsx("span", { children: index + 1 }),
							/* @__PURE__ */ jsx("strong", { children: label }),
							index < 3 ? /* @__PURE__ */ jsx("i", {
								"aria-hidden": "true",
								children: "→"
							}) : null
						]
					}, label))
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enSection",
				id: "about",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "enSectionHead center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "WHY ENTSUMUGI?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "活動していても 知られなければ伝わらない"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
							className: "enOnlyDesktop",
							children: [
								"日頃の活動を",
								/* @__PURE__ */ jsx("br", {}),
								"届く発信へ変えていく"
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "enOnlyMobile",
							children: [
								"日頃の活動を",
								/* @__PURE__ */ jsx("br", {}),
								"届く発信へ",
								/* @__PURE__ */ jsx("br", {}),
								"変えていく"
							]
						})] }),
						/* @__PURE__ */ jsx("p", { children: "選挙の時だけではなく、日頃から少しずつ接点をつくる。そのためには、無理なく発信を続けられる仕組みが必要です。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "enProblemGrid",
					children: problemCards.map((item) => /* @__PURE__ */ jsxs("article", {
						className: "enProblemCard",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "enRoundNumber",
								children: item.number
							}),
							/* @__PURE__ */ jsx("h3", { children: item.title }),
							/* @__PURE__ */ jsx("p", { children: item.text })
						]
					}, item.number))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enStatement",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enStatementInner",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "OUR APPROACH"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsx("span", {
							className: "enOnlyDesktop",
							children: "SNSは魔法ではありません"
						}), /* @__PURE__ */ jsxs("span", {
							className: "enOnlyMobile",
							children: [
								"SNSは",
								/* @__PURE__ */ jsx("br", {}),
								"魔法ではありません"
							]
						})] }),
						/* @__PURE__ */ jsx("p", { children: "投稿さえすれば、すべての人へ情報が届くわけではありません。まずは関心を持ってくれている人へ、日々の活動をきちんと届ける。その積み重ねが、少しずつ関心の外側へ広がっていきます。" }),
						/* @__PURE__ */ jsxs("div", {
							className: "enStatementSteps",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsx("strong", { children: "関心層へ届ける" })] }),
								/* @__PURE__ */ jsx("i", { children: "→" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsx("strong", { children: "無理なく続ける" })] }),
								/* @__PURE__ */ jsx("i", { children: "→" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsx("strong", { children: "少しずつ広げる" })] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enSection",
				id: "flow",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "enSectionHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "HOW IT WORKS"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "会わなくても SNS運用を任せられる"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
							className: "enOnlyDesktop",
							children: [
								"活動から投稿までを",
								/* @__PURE__ */ jsx("br", {}),
								"ひとつの流れへ"
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "enOnlyMobile",
							children: [
								"活動から投稿までを",
								/* @__PURE__ */ jsx("br", {}),
								"ひとつの流れへ"
							]
						})] }),
						/* @__PURE__ */ jsx("p", { children: "予定や写真を共有するだけで、対面の打ち合わせがなくても発信準備を進められる仕組みを整えています。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "enFlowGrid",
					children: flowSteps.map((step, index) => /* @__PURE__ */ jsxs("article", {
						className: "enFlowCard",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "enFlowTop",
								children: [/* @__PURE__ */ jsx("span", {
									className: "enRoundNumber",
									children: step.number
								}), /* @__PURE__ */ jsx("small", { children: step.label })]
							}),
							/* @__PURE__ */ jsx("h3", { children: step.title }),
							/* @__PURE__ */ jsx("p", { children: step.text }),
							index < flowSteps.length - 1 ? /* @__PURE__ */ jsx("i", {
								className: "enFlowArrow",
								"aria-hidden": "true",
								children: "→"
							}) : null
						]
					}, step.number))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enDeviceSection",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enDeviceInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enDeviceCopy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "PC + SMARTPHONE"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "外出先と事務所をつなぐ"
							}),
							/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
								className: "enOnlyDesktop",
								children: [
									"同じ情報を",
									/* @__PURE__ */ jsx("br", {}),
									"どこからでも確認"
								]
							}), /* @__PURE__ */ jsxs("span", {
								className: "enOnlyMobile",
								children: [
									"同じ情報を",
									/* @__PURE__ */ jsx("br", {}),
									"どこからでも確認"
								]
							})] }),
							/* @__PURE__ */ jsx("p", { children: "外出先ではスマートフォン、事務所ではPC。議員本人・事務所スタッフ・共有を許可した縁紡が、同じ流れを確認できます。" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enDeviceDiagram",
						"aria-label": "スマートフォンとPCの連携イメージ",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "enDeviceCard",
								children: [
									/* @__PURE__ */ jsx("small", { children: "外出先" }),
									/* @__PURE__ */ jsx("strong", { children: "SMARTPHONE" }),
									/* @__PURE__ */ jsx("span", { children: "活動・写真を共有" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enDeviceBridge",
								children: [
									/* @__PURE__ */ jsx("strong", { children: "縁紡" }),
									/* @__PURE__ */ jsx("i", { children: "↕" }),
									/* @__PURE__ */ jsx("span", { children: "同じ情報" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enDeviceCard pc",
								children: [
									/* @__PURE__ */ jsx("small", { children: "事務所" }),
									/* @__PURE__ */ jsx("strong", { children: "PC" }),
									/* @__PURE__ */ jsx("span", { children: "予定・原稿を確認" })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enSection",
				id: "features",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "enSectionHead center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "FEATURES"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "発信だけではなく 日々の仕事をひとつの入口へ"
						}),
						/* @__PURE__ */ jsx("h2", { children: "縁紡でできること" }),
						/* @__PURE__ */ jsx("p", { children: "予定、活動、原稿、素材、相談、領収書まで。議員活動と発信に関わる情報を、使いやすい形でまとめます。" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "enFeatureGrid",
					children: features.map(([title, text], index) => /* @__PURE__ */ jsxs("article", {
						className: "enFeatureCard",
						children: [
							/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						]
					}, title))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enAiSecretarySection",
				id: "ai-secretary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enAiSecretaryInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enAiSecretaryCopy",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "AI SECRETARY"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "「あれどこだっけ？」を減らす"
							}),
							/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
								className: "enOnlyDesktop",
								children: [
									"縁紡の中に",
									/* @__PURE__ */ jsx("br", {}),
									"AI秘書という入口"
								]
							}), /* @__PURE__ */ jsxs("span", {
								className: "enOnlyMobile",
								children: [
									"縁紡の中に",
									/* @__PURE__ */ jsx("br", {}),
									"AI秘書という入口"
								]
							})] }),
							/* @__PURE__ */ jsx("p", { children: "日程、相談案件、原稿、共有した素材など、日々の仕事を探し回る時間を減らすためのAI機能です。自分で運用しながら、必要なところだけAIの力を借りられます。" }),
							/* @__PURE__ */ jsxs("div", {
								className: "enAiSecretaryPrice",
								children: [
									/* @__PURE__ */ jsx("span", { children: "AI秘書コース" }),
									/* @__PURE__ */ jsxs("strong", { children: ["25,000", /* @__PURE__ */ jsx("small", { children: "円 / 月" })] }),
									/* @__PURE__ */ jsx("p", { children: "利用回数を増やしたい場合は追加枠も用意しています。" })
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enAiSecretaryPanel",
						"aria-label": "AI秘書でできる主なこと",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "enAiSecretaryTop",
								children: [/* @__PURE__ */ jsx("span", {
									className: "enAiSecretaryMark",
									children: "AI"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "何をお手伝いしますか？" }), /* @__PURE__ */ jsx("small", { children: "下の項目から仕事を選べます" })] })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "enAiSecretaryGrid",
								children: aiActions.map(([title, text]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: title }), /* @__PURE__ */ jsx("span", { children: text })] }, title))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enAiSecretaryExample",
								children: [
									/* @__PURE__ */ jsx("span", { children: "たとえば" }),
									/* @__PURE__ */ jsx("p", { children: "「来週の予定を確認して」" }),
									/* @__PURE__ */ jsx("p", { children: "「この活動をX用の原稿にしたい」" }),
									/* @__PURE__ */ jsx("p", { children: "「対応中の相談案件を見せて」" })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enTrustSection",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enTrustInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enSectionHead center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "INFORMATION SHARING"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "便利さと情報の分け方を両立する"
							}),
							/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
								className: "enOnlyDesktop",
								children: [
									"必要な情報だけを",
									/* @__PURE__ */ jsx("br", {}),
									"必要な範囲へ"
								]
							}), /* @__PURE__ */ jsxs("span", {
								className: "enOnlyMobile",
								children: [
									"必要な情報だけを",
									/* @__PURE__ */ jsx("br", {}),
									"必要な範囲へ"
								]
							})] }),
							/* @__PURE__ */ jsx("p", { children: "議員事務所には、発信に使う情報と、事務所内だけで扱いたい情報があります。縁紡は、その違いを前提にした設計です。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "enTrustGrid",
						children: trustItems.map((item, index) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
							/* @__PURE__ */ jsx("h3", { children: item.title }),
							/* @__PURE__ */ jsx("p", { children: item.text })
						] }, item.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enExperienceSection",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enExperienceInner",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "FIELD EXPERIENCE"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "政治・選挙の現場経験をサービス設計に"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
							className: "enOnlyDesktop",
							children: [
								"「もっと投稿して",
								/* @__PURE__ */ jsx("br", {}),
								"ください」だけでは",
								/* @__PURE__ */ jsx("br", {}),
								"終わらせない"
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "enOnlyMobile",
							children: [
								"「もっと投稿して",
								/* @__PURE__ */ jsx("br", {}),
								"ください」だけでは",
								/* @__PURE__ */ jsx("br", {}),
								"終わらせない"
							]
						})] }),
						/* @__PURE__ */ jsx("p", { children: "議員活動には、議会、地域行事、相談対応、日程調整など多くの仕事があります。発信だけに時間を使えない現場を知っているからこそ、縁紡では投稿作業だけでなく、活動を記録し、整理し、発信につなげる仕組みから考えます。" })
					] }), /* @__PURE__ */ jsxs("div", {
						className: "enExperienceFacts",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("b", { children: "元議員秘書" }), " 約3年間勤務"] }),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("b", { children: "選挙実務" }), " 衆院・参院・市長・県議・市議を経験"] }),
							/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("b", { children: "運営実務" }), " 地方選挙で事務所実務の取りまとめを担当"] })
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enSection",
				id: "price",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "enSectionHead center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "PRICE"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "必要な支援だけを 無理なく続けられる形へ"
							}),
							/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsx("span", {
								className: "enOnlyDesktop",
								children: "利用方法は 大きく3つ"
							}), /* @__PURE__ */ jsxs("span", {
								className: "enOnlyMobile",
								children: [
									"利用方法は",
									/* @__PURE__ */ jsx("br", {}),
									"大きく3つ"
								]
							})] }),
							/* @__PURE__ */ jsx("p", { children: "自分で管理するか、継続して任せるか、必要な時だけ依頼するか。支援範囲に合わせて選べます。" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "enPricingGrid",
						children: pricingGroups.map((plan) => /* @__PURE__ */ jsxs("article", {
							className: `enPriceCard ${plan.featured ? "featured" : ""}`,
							children: [
								plan.featured ? /* @__PURE__ */ jsx("span", {
									className: "enRecommend",
									children: "おすすめ"
								}) : null,
								/* @__PURE__ */ jsx("small", { children: plan.label }),
								/* @__PURE__ */ jsx("h3", { children: plan.title }),
								/* @__PURE__ */ jsxs("div", {
									className: "enPriceValue",
									children: [/* @__PURE__ */ jsx("strong", { children: plan.price }), /* @__PURE__ */ jsx("span", { children: plan.unit })]
								}),
								/* @__PURE__ */ jsx("p", { children: plan.text }),
								/* @__PURE__ */ jsx("ul", { children: plan.notes.map((note) => /* @__PURE__ */ jsx("li", { children: note }, note)) })
							]
						}, plan.title))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "enToolsIntro",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "enToolsLead",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "enEyebrow",
										children: "NEXT STEP"
									}),
									/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsx("span", {
										className: "enOnlyDesktop",
										children: "知りたいことから 次へ"
									}), /* @__PURE__ */ jsxs("span", {
										className: "enOnlyMobile",
										children: [
											"知りたいことから",
											/* @__PURE__ */ jsx("br", {}),
											"次へ"
										]
									})] }),
									/* @__PURE__ */ jsx("p", { children: "立候補準備をまとめて始めたい方、まず自分に合うコースを知りたい方、だいたいの料金感を確認したい方。それぞれの入口を用意しています。" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enToolCards three",
								children: [
									/* @__PURE__ */ jsxs(Link, {
										className: "enToolCard startup",
										to: "/entsumugi/startup",
										children: [
											/* @__PURE__ */ jsx("span", { children: "CANDIDATE" }),
											/* @__PURE__ */ jsx("strong", { children: "候補者向けスタートアップ" }),
											/* @__PURE__ */ jsx("p", { children: "SNS・LINE・HPなど、立候補に向けた情報発信の土台をまとめて準備。" }),
											/* @__PURE__ */ jsx("b", { children: "特設ページを見る →" })
										]
									}),
									/* @__PURE__ */ jsxs(Link, {
										className: "enToolCard",
										to: "/entsumugi/diagnosis",
										children: [
											/* @__PURE__ */ jsx("span", { children: "30 SEC" }),
											/* @__PURE__ */ jsx("strong", { children: "コース相性診断" }),
											/* @__PURE__ */ jsx("p", { children: "質問は3つだけ。今の希望に近い使い方を案内します。" }),
											/* @__PURE__ */ jsx("b", { children: "診断してみる →" })
										]
									}),
									/* @__PURE__ */ jsxs(Link, {
										className: "enToolCard estimate",
										to: "/entsumugi/estimate",
										children: [
											/* @__PURE__ */ jsx("span", { children: "PRICE" }),
											/* @__PURE__ */ jsx("strong", { children: "料金目安シミュレーター" }),
											/* @__PURE__ */ jsx("p", { children: "準備状況を選んで、自分の場合のおおまかな料金帯を確認。" }),
											/* @__PURE__ */ jsx("b", { children: "料金目安を見る →" })
										]
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enToolDisclaimer",
								children: "※ 診断・シミュレーション結果は目安です。実際の作業内容・素材・運用状況により、適したコースや料金が前後する場合があります。正式な内容はヒアリング後に確認します。"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enOnboardingSection",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enOnboardingInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enSectionHead center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "START FLOW"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "問い合わせのあとも迷わない"
							}),
							/* @__PURE__ */ jsx("h2", { children: "導入までの流れ" }),
							/* @__PURE__ */ jsx("p", { children: "最初から全部を決める必要はありません。今の発信状況を確認しながら、必要な範囲から始めます。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "enOnboardingGrid",
						children: onboardingSteps.map(([num, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: num }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, num))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enFaqSection",
				id: "faq",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enFaqInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "FAQ"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "相談前によくある質問"
							}),
							/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
								className: "enOnlyDesktop",
								children: [
									"気になるところを",
									/* @__PURE__ */ jsx("br", {}),
									"先に"
								]
							}), /* @__PURE__ */ jsxs("span", {
								className: "enOnlyMobile",
								children: [
									"気になるところを",
									/* @__PURE__ */ jsx("br", {}),
									"先に"
								]
							})] })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "enFaqList",
						children: faqItems.map((item) => /* @__PURE__ */ jsxs("details", { children: [/* @__PURE__ */ jsx("summary", { children: item.q }), /* @__PURE__ */ jsx("p", { children: item.a })] }, item.q))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enFinalCta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enFinalCtaInner",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "CONTACT"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "活動を積み重ね きちんと市民へ届ける"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsx("span", {
							className: "enOnlyDesktop",
							children: "その継続を 縁紡が支えます"
						}), /* @__PURE__ */ jsxs("span", {
							className: "enOnlyMobile",
							children: [
								"その継続を",
								/* @__PURE__ */ jsx("br", {}),
								"縁紡が支えます"
							]
						})] }),
						/* @__PURE__ */ jsx("p", { children: "現在の発信方法、事務所の体制、希望する支援範囲を確認しながら、最適な使い方を一緒に整理します。" })
					] }), /* @__PURE__ */ jsxs("div", {
						className: "enFinalActions",
						children: [/* @__PURE__ */ jsx(Link, {
							className: "enButton primary",
							to: "/contact?type=entsumugi",
							children: "まずは相談する →"
						}), /* @__PURE__ */ jsx("a", {
							className: "enButton secondary",
							href: SERVICE_URL,
							target: "_blank",
							rel: "noreferrer",
							children: "縁紡をご利用中の方"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "enFooter",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "縁紡" }), /* @__PURE__ */ jsx("span", { children: "議員サポートデスク" })] }),
					/* @__PURE__ */ jsx("p", { children: "地方議員向けSNS運用・情報発信支援" }),
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						children: "運営・開発 Puku Lab"
					})
				]
			})
		]
	});
}
var INITIAL_ITEMS = [
	{
		code: "INIT-03",
		title: "SNS新規立ち上げ一式",
		price: "16,500円",
		text: "SNSアカウント開設・プロフィール文章・自己紹介投稿1本まで。"
	},
	{
		code: "LINE-05",
		title: "LINE公式 初期設定一式",
		price: "22,000円",
		text: "開設・基本情報・初期配信の準備まで。"
	},
	{
		code: "WEB-07",
		title: "簡易HP制作 3ページまで",
		price: "88,000円",
		text: "トップ＋2ページまでの、基本的な候補者・議員サイトを想定。"
	}
];
var FIT_ITEMS = [
	"立候補に向けて、SNSをこれから始めたい",
	"LINE公式やHPも一緒に整えたい",
	"何をどの順番で準備すればいいか迷っている",
	"立ち上げ後の発信も継続して任せたい"
];
function EntsumugiStartup() {
	return /* @__PURE__ */ jsxs("main", {
		className: "enPage enStartupPage",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "enHeader",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enHeaderInner",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/entsumugi",
						className: "enBrand",
						"aria-label": "縁紡トップへ",
						children: [/* @__PURE__ */ jsx("strong", { children: "縁紡" }), /* @__PURE__ */ jsx("span", { children: "議員サポートデスク" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enHeaderActions",
						children: [/* @__PURE__ */ jsx(Link, {
							className: "enBackLink",
							to: "/entsumugi",
							children: "縁紡トップへ"
						}), /* @__PURE__ */ jsx(Link, {
							className: "enHeaderCta",
							to: "/contact?type=entsumugi",
							children: "相談する"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enStartupHero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enStartupHeroInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enStartupHeroCopy",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "enPills",
								children: [/* @__PURE__ */ jsx("span", { children: "2027 統一地方選に向けて" }), /* @__PURE__ */ jsx("span", { children: "期間限定特設ページ" })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "CANDIDATE STARTUP"
							}),
							/* @__PURE__ */ jsxs("h1", { children: [/* @__PURE__ */ jsxs("span", {
								className: "enOnlyDesktop",
								children: [
									"立候補の準備と",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("strong", { children: "発信の準備を同時に！" })
								]
							}), /* @__PURE__ */ jsxs("span", {
								className: "enOnlyMobile",
								children: [
									"立候補の準備と",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsxs("strong", { children: [
										"発信の準備を",
										/* @__PURE__ */ jsx("br", {}),
										"同時に！"
									] })
								]
							})] }),
							/* @__PURE__ */ jsx("p", {
								className: "enLead",
								children: "SNS・LINE公式・HPを一つずつ別々に考えるのではなく、候補者として情報を届けるための入口をまとめて整えるスタートアップ支援です。"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "enHeroActions",
								children: [/* @__PURE__ */ jsxs(Link, {
									className: "enButton primary",
									to: "/entsumugi/estimate?preset=startup",
									children: ["この内容で料金目安を見る ", /* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										children: "→"
									})]
								}), /* @__PURE__ */ jsx(Link, {
									className: "enButton secondary",
									to: "/contact?type=entsumugi",
									children: "まず相談する"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enNote",
								children: "すでにSNS・LINE・HPがある場合は、不要な項目を外して個別に組み替えられます。"
							})
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "enStartupPriceCard",
						"aria-label": "スタートアップパック料金の目安",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "STARTUP MODEL"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "enStartupPriceLabel",
								children: "初期構築"
							}),
							/* @__PURE__ */ jsxs("strong", {
								className: "enStartupPrice",
								children: ["126,500", /* @__PURE__ */ jsx("small", { children: "円" })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "enStartupPlus",
								children: "＋"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "enStartupPriceLabel",
								children: "継続運用"
							}),
							/* @__PURE__ */ jsxs("strong", {
								className: "enStartupMonthly",
								children: ["66,000", /* @__PURE__ */ jsx("small", { children: "円 / 月〜" })]
							}),
							/* @__PURE__ */ jsxs("p", { children: ["初月の参考合計：", /* @__PURE__ */ jsx("b", { children: "192,500円〜" })] }),
							/* @__PURE__ */ jsx("small", {
								className: "enStartupPriceNote",
								children: "※すべて税込。選択内容・素材・対応範囲により変動します。"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enSection enStartupFitSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "enSectionHead center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "FOR CANDIDATES"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "「まず何を作る？」から整理したい方へ"
						}),
						/* @__PURE__ */ jsx("h2", { children: "こんな準備段階に" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "enStartupFitGrid",
					children: FIT_ITEMS.map((item, index) => /* @__PURE__ */ jsxs("div", {
						className: "enStartupFitCard",
						children: [/* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ jsx("p", { children: item })]
					}, item))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enStartupPackageSection",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enStartupPackageInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "WHAT'S INCLUDED"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "情報発信の土台をまとめて立ち上げる"
							}),
							/* @__PURE__ */ jsx("h2", { children: "初期構築 126,500円の内訳" }),
							/* @__PURE__ */ jsx("p", { children: "一例として、SNS新規1媒体・LINE公式・3ページHPをまとめて準備する構成です。" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enStartupItemList",
						children: [INITIAL_ITEMS.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "enStartupItem",
							children: [
								/* @__PURE__ */ jsx("span", { children: item.code }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: item.title }), /* @__PURE__ */ jsx("p", { children: item.text })] }),
								/* @__PURE__ */ jsx("strong", { children: item.price })
							]
						}, item.code)), /* @__PURE__ */ jsxs("div", {
							className: "enStartupItem total",
							children: [
								/* @__PURE__ */ jsx("span", { children: "TOTAL" }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "初期構築 合計" }), /* @__PURE__ */ jsx("p", { children: "上記3項目をすべて新規で準備した場合。" })] }),
								/* @__PURE__ */ jsx("strong", { children: "126,500円" })
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enSection enStartupContinueSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "enSectionHead center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "AFTER LAUNCH"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "作っただけで終わらせない"
						}),
						/* @__PURE__ */ jsx("h2", { children: "立ち上げ後は月額運用へ" }),
						/* @__PURE__ */ jsx("p", { children: "SNSやHPは、用意しただけでは届きません。日々の活動を原稿・投稿へつなげる基本運用プランを組み合わせられます。" })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "enStartupMonthlyCard",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", { children: "MONTHLY SUPPORT" }),
						/* @__PURE__ */ jsx("h3", { children: "基本運用プラン" }),
						/* @__PURE__ */ jsx("p", { children: "継続的な原稿作成・投稿代行・簡易画像・発信相談などを支援。" })
					] }), /* @__PURE__ */ jsxs("strong", { children: ["66,000", /* @__PURE__ */ jsx("small", { children: "円 / 月" })] })]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enStartupStepsSection",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enStartupStepsInner",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "enSectionHead center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "enEyebrow",
								children: "START FLOW"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "enSectionCatch",
								children: "必要なものだけ順番に"
							}),
							/* @__PURE__ */ jsx("h2", { children: "スタートまでの流れ" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "enStartupSteps",
						children: [
							[
								"01",
								"現在の状況を確認",
								"既存SNS・LINE・HPの有無と、準備したい時期を確認します。"
							],
							[
								"02",
								"必要な項目を選ぶ",
								"すでにあるものは除き、必要な初期設定・制作だけを組みます。"
							],
							[
								"03",
								"立ち上げ・制作",
								"SNS、LINE公式、HPなどを順番に準備します。"
							],
							[
								"04",
								"発信を継続",
								"必要に応じて月額運用へつなぎ、日々の活動発信を続けます。"
							]
						].map(([num, title, text]) => /* @__PURE__ */ jsxs("article", { children: [
							/* @__PURE__ */ jsx("span", { children: num }),
							/* @__PURE__ */ jsx("h3", { children: title }),
							/* @__PURE__ */ jsx("p", { children: text })
						] }, num))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enStartupEstimateCta",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enStartupEstimateCtaInner",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "YOUR CASE"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "全部そろっていなくても大丈夫です"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [/* @__PURE__ */ jsxs("span", {
							className: "enOnlyDesktop",
							children: [
								"自分の場合の",
								/* @__PURE__ */ jsx("br", {}),
								"料金目安を確認"
							]
						}), /* @__PURE__ */ jsxs("span", {
							className: "enOnlyMobile",
							children: [
								"自分の場合の",
								/* @__PURE__ */ jsx("br", {}),
								"料金目安を確認"
							]
						})] }),
						/* @__PURE__ */ jsx("p", { children: "すでにHPがある、SNSだけ新しく作りたい、LINEは不要など、現在の状況に合わせて項目を外せます。" })
					] }), /* @__PURE__ */ jsxs("div", {
						className: "enFinalActions",
						children: [/* @__PURE__ */ jsx(Link, {
							className: "enButton primary",
							to: "/entsumugi/estimate?preset=startup",
							children: "スタートアップ構成で目安を見る →"
						}), /* @__PURE__ */ jsx(Link, {
							className: "enButton secondary",
							to: "/entsumugi/diagnosis",
							children: "先にコース診断をする"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "enStartupLegalNote",
				children: /* @__PURE__ */ jsx("p", { children: "※ このページは情報発信環境の立ち上げ支援を案内するものです。特急対応・選挙期間中の対応・撮影・大型制作物など、通常範囲を超える内容は事前に条件と料金を確認します。" })
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "enFooter",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "縁紡" }), /* @__PURE__ */ jsx("span", { children: "議員サポートデスク" })] }),
					/* @__PURE__ */ jsx("p", { children: "地方議員・候補者向け情報発信支援" }),
					/* @__PURE__ */ jsx(Link, {
						to: "/entsumugi",
						children: "縁紡トップへ"
					})
				]
			})
		]
	});
}
var questions = [
	{
		id: "delegate",
		kicker: "Q1",
		title: "発信を、どこまで自分でやりたいですか？",
		options: [
			{
				value: "self",
				label: "基本は自分で管理したい",
				scores: {
					app: 4,
					ai: 1
				}
			},
			{
				value: "assist",
				label: "文章づくりなどをAIに手伝ってほしい",
				scores: {
					ai: 4,
					app: 1
				}
			},
			{
				value: "operate",
				label: "原稿や投稿を継続して任せたい",
				scores: {
					basic: 4,
					pr: 1
				}
			},
			{
				value: "whole",
				label: "広報全体を相談しながら任せたい",
				scores: {
					pr: 3,
					room: 4
				}
			}
		]
	},
	{
		id: "media",
		kicker: "Q2",
		title: "継続して使いたい媒体は、どのくらいですか？",
		options: [
			{
				value: "one",
				label: "1媒体くらい",
				scores: {
					app: 2,
					ai: 2,
					basic: 1
				}
			},
			{
				value: "two",
				label: "2媒体くらい",
				scores: {
					basic: 3,
					ai: 1
				}
			},
			{
				value: "three",
				label: "3媒体くらい",
				scores: {
					pr: 4,
					basic: 1
				}
			},
			{
				value: "many",
				label: "4媒体以上・まだ整理できていない",
				scores: {
					room: 4,
					pr: 2
				}
			}
		]
	},
	{
		id: "pain",
		kicker: "Q3",
		title: "今いちばん減らしたい負担は？",
		options: [
			{
				value: "organize",
				label: "予定・活動・原稿などの整理",
				scores: {
					app: 3,
					ai: 2
				}
			},
			{
				value: "write",
				label: "何をどう書けばいいか考える時間",
				scores: {
					ai: 3,
					basic: 2
				}
			},
			{
				value: "continue",
				label: "投稿が続かない・手が回らないこと",
				scores: {
					basic: 4,
					pr: 2
				}
			},
			{
				value: "strategy",
				label: "媒体の使い分けや広報全体の判断",
				scores: {
					pr: 3,
					room: 4
				}
			}
		]
	}
];
var plans = {
	app: {
		name: "アプリ利用のみ",
		price: "月額 1,980円",
		copy: "まずは情報を一か所に整理したい方に。",
		detail: "予定・活動・原稿・相談・領収書などを、自分と事務所で管理する使い方が近そうです。"
	},
	ai: {
		name: "AI秘書コース",
		price: "月額 25,000円",
		copy: "自分で運用しながら、AIの力を借りたい方に。",
		detail: "日程・案件・原稿づくりなどをAIで補助しつつ、最終判断や投稿は自分で進める使い方が近そうです。AI利用回数の追加枠は1枠1,000円で追加できます。"
	},
	basic: {
		name: "基本運用プラン",
		price: "月額 66,000円",
		copy: "原稿・投稿を継続して任せたい方に。",
		detail: "2媒体程度を中心に、原稿作成・投稿代行・簡易画像・発信相談まで任せる使い方が近そうです。"
	},
	pr: {
		name: "広報運用プラン",
		price: "月額 99,000円",
		copy: "複数媒体を使い分けながら、企画も相談したい方に。",
		detail: "媒体別の文章や簡易動画も含め、3媒体程度を継続して運用する使い方が近そうです。"
	},
	room: {
		name: "外部広報室プラン",
		price: "月額 148,000円",
		copy: "発信全体を外部広報室のように任せたい方に。",
		detail: "媒体選定からLINE・HPの軽微更新、月次振り返りまで、広報全体を一緒に組み立てる使い方が近そうです。"
	}
};
function EntsumugiDiagnosis() {
	const [answers, setAnswers] = useState({});
	const [showResult, setShowResult] = useState(false);
	const completed = questions.every((question) => answers[question.id]);
	const resultKey = useMemo(() => {
		const totals = {
			app: 0,
			ai: 0,
			basic: 0,
			pr: 0,
			room: 0
		};
		questions.forEach((question) => {
			const choice = question.options.find((option) => option.value === answers[question.id]);
			if (!choice) return;
			Object.entries(choice.scores).forEach(([key, score]) => {
				totals[key] += score;
			});
		});
		return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
	}, [answers]);
	const result = plans[resultKey];
	const contactParams = new URLSearchParams({
		type: "entsumugi",
		source: "diagnosis",
		plan: result.name,
		price: result.price
	}).toString();
	function reset() {
		setAnswers({});
		setShowResult(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "enPage enToolPage",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "enHeader",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enHeaderInner",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/entsumugi",
						className: "enBrand",
						children: [/* @__PURE__ */ jsx("strong", { children: "縁紡" }), /* @__PURE__ */ jsx("span", { children: "議員サポートデスク" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enHeaderActions",
						children: [/* @__PURE__ */ jsx(Link, {
							className: "enBackLink",
							to: "/entsumugi/startup",
							children: "候補者向け"
						}), /* @__PURE__ */ jsx(Link, {
							className: "enBackLink",
							to: "/entsumugi",
							children: "縁紡トップへ"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enToolHero enDiagnosisHero",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "enPills enToolPills",
						children: [/* @__PURE__ */ jsx("span", { children: "質問は3つだけ" }), /* @__PURE__ */ jsx("span", { children: "約30秒" })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "enEyebrow",
						children: "COURSE DIAGNOSIS"
					}),
					/* @__PURE__ */ jsxs("h1", { children: [
						"あなたと相性のいい",
						/* @__PURE__ */ jsx("br", {}),
						"コースを3問で。"
					] }),
					/* @__PURE__ */ jsx("p", { children: "厳密な判定ではなく、今の希望に近い使い方を探すための簡易診断です。迷ったら、直感に近いものを選んでください。" })
				]
			}),
			!showResult ? /* @__PURE__ */ jsxs("section", {
				className: "enDiagnosisPanel",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "enDiagnosisProgress",
						"aria-label": `回答 ${Object.keys(answers).length} / 3`,
						children: /* @__PURE__ */ jsx("span", { style: { width: `${Object.keys(answers).length / questions.length * 100}%` } })
					}),
					questions.map((question) => /* @__PURE__ */ jsxs("fieldset", {
						className: "enQuestion",
						children: [/* @__PURE__ */ jsxs("legend", { children: [/* @__PURE__ */ jsx("span", { children: question.kicker }), question.title] }), /* @__PURE__ */ jsx("div", {
							className: "enChoiceGrid",
							children: question.options.map((option) => {
								const checked = answers[question.id] === option.value;
								return /* @__PURE__ */ jsxs("label", {
									className: `enChoice ${checked ? "selected" : ""}`,
									children: [/* @__PURE__ */ jsx("input", {
										type: "radio",
										name: question.id,
										value: option.value,
										checked,
										onChange: () => setAnswers((prev) => ({
											...prev,
											[question.id]: option.value
										}))
									}), /* @__PURE__ */ jsx("span", { children: option.label })]
								}, option.value);
							})
						})]
					}, question.id)),
					/* @__PURE__ */ jsx("button", {
						className: "enButton primary enToolSubmit",
						type: "button",
						disabled: !completed,
						onClick: () => setShowResult(true),
						children: "診断結果を見る →"
					}),
					!completed ? /* @__PURE__ */ jsx("p", {
						className: "enFormHint",
						children: "3問すべて選ぶと結果を表示できます。"
					}) : null
				]
			}) : /* @__PURE__ */ jsxs("section", {
				className: "enDiagnosisResult",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "enEyebrow",
						children: "YOUR MATCH"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "enSectionCatch",
						children: "あなたに近そうなのは"
					}),
					/* @__PURE__ */ jsx("h2", { children: result.name }),
					/* @__PURE__ */ jsx("strong", {
						className: "enResultPrice",
						children: result.price
					}),
					/* @__PURE__ */ jsx("h3", { children: result.copy }),
					/* @__PURE__ */ jsx("p", { children: result.detail }),
					/* @__PURE__ */ jsxs("div", {
						className: "enDiagnosisNext",
						children: [/* @__PURE__ */ jsx("span", { children: "次は" }), /* @__PURE__ */ jsx("strong", { children: "必要な準備状況を選んで、おおまかな料金帯を確認できます。" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "enResultActions",
						children: [
							/* @__PURE__ */ jsx(Link, {
								className: "enButton primary",
								to: `/entsumugi/estimate?plan=${resultKey}`,
								children: "このコースで料金目安を見る →"
							}),
							/* @__PURE__ */ jsx(Link, {
								className: "enButton secondary",
								to: `/contact?${contactParams}`,
								children: "この結果で相談する"
							}),
							/* @__PURE__ */ jsx("button", {
								className: "enTextButton",
								type: "button",
								onClick: reset,
								children: "もう一度診断する"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "enToolDisclaimer",
						children: "※ 簡易診断です。実際の発信状況・事務所体制・希望する支援範囲によって、より適したコースが変わる場合があります。"
					})
				]
			})
		]
	});
}
var basePlans = {
	app: {
		name: "アプリ利用のみ",
		monthly: 1980,
		note: "まずは自分と事務所で情報をまとめたい方へ。"
	},
	ai: {
		name: "AI秘書コース",
		monthly: 25e3,
		note: "AIを使いながら、自分で運用を進めたい方へ。"
	},
	busy: {
		name: "繁忙月サポート",
		monthly: 66e3,
		note: "AI秘書をベースに、忙しい月だけ支援を増やしたい方へ。"
	},
	basic: {
		name: "基本運用プラン",
		monthly: 66e3,
		note: "原稿・投稿などを継続して任せたい方へ。"
	},
	pr: {
		name: "広報運用プラン",
		monthly: 99e3,
		note: "複数媒体を使い分けながら、企画も相談したい方へ。"
	},
	room: {
		name: "外部広報室プラン",
		monthly: 148e3,
		note: "広報全体を外部広報室のように任せたい方へ。"
	}
};
var snsOptions = [
	{
		value: "none",
		label: "今あるSNSを自分で使う",
		text: "新しい立ち上げや引継ぎは考えていない",
		score: 0
	},
	{
		value: "handover",
		label: "既存SNSの引継ぎを頼みたい",
		text: "今あるアカウントを確認して運用を始めたい",
		score: 1
	},
	{
		value: "newOne",
		label: "SNSを1つ新しく始めたい",
		text: "プロフィールや初回投稿も含めて準備したい",
		score: 2
	},
	{
		value: "newMany",
		label: "SNSを複数まとめて整えたい",
		text: "複数媒体の立ち上げ・展開を考えている",
		score: 4
	}
];
var lineOptions = [{
	value: "none",
	label: "LINE公式は不要・既に使える",
	score: 0
}, {
	value: "new",
	label: "LINE公式を新しく準備したい",
	score: 2
}];
var webOptions = [
	{
		value: "none",
		label: "HPは不要・既に整っている",
		text: "大きな修正は考えていない",
		score: 0
	},
	{
		value: "update",
		label: "今あるHPを少し整えたい",
		text: "文字・画像・既存ページの更新が中心",
		score: 1
	},
	{
		value: "lp",
		label: "LPや新しい案内ページがほしい",
		text: "1ページで内容をまとめたい",
		score: 4
	},
	{
		value: "newSite",
		label: "HPを新しく作りたい",
		text: "候補者・議員サイトを一から準備したい",
		score: 6
	}
];
var creativeOptions = [
	{
		value: "none",
		label: "追加制作はほぼ不要",
		text: "月額プランの通常範囲を中心に使いたい",
		score: 0
	},
	{
		value: "sometimes",
		label: "画像・動画を時々お願いしたい",
		text: "必要な時だけ追加制作を頼みたい",
		score: 1
	},
	{
		value: "regular",
		label: "動画や追加制作も継続して使いたい",
		text: "通常運用に加えて制作物も増えそう",
		score: 3
	},
	{
		value: "custom",
		label: "まだ整理できていない・大型制作もありそう",
		text: "内容を相談しながら決めたい",
		score: 5
	}
];
var setupBands = [
	{
		max: 0,
		label: "追加費用はほぼなし",
		sub: "月額コース中心で始められそうです。"
	},
	{
		max: 2,
		label: "1〜3万円程度",
		sub: "軽い初期設定や単発制作が中心のイメージです。"
	},
	{
		max: 4,
		label: "3〜6万円程度",
		sub: "複数の初期設定・制作が必要になりそうです。"
	},
	{
		max: 6,
		label: "6〜10万円程度",
		sub: "WEBや複数の準備を含む可能性があります。"
	},
	{
		max: 10,
		label: "10〜15万円程度",
		sub: "複数媒体やHP立ち上げをまとめて行う規模感です。"
	},
	{
		max: Infinity,
		label: "15万円〜・個別確認",
		sub: "制作範囲が広いため、内容を確認して正式見積します。"
	}
];
function yen(value) {
	return new Intl.NumberFormat("ja-JP").format(value);
}
function findLabel(options, value) {
	return options.find((item) => item.value === value)?.label || "未選択";
}
function EntsumugiEstimate() {
	const [searchParams] = useSearchParams();
	const preset = searchParams.get("preset");
	const incomingPlan = searchParams.get("plan");
	const [plan, setPlan] = useState(preset === "startup" ? "basic" : basePlans[incomingPlan] ? incomingPlan : "basic");
	const [sns, setSns] = useState(preset === "startup" ? "newOne" : "none");
	const [line, setLine] = useState(preset === "startup" ? "new" : "none");
	const [web, setWeb] = useState(preset === "startup" ? "newSite" : "none");
	const [creative, setCreative] = useState("none");
	const result = useMemo(() => {
		const score = (snsOptions.find((item) => item.value === sns)?.score || 0) + (lineOptions.find((item) => item.value === line)?.score || 0) + (webOptions.find((item) => item.value === web)?.score || 0) + (creativeOptions.find((item) => item.value === creative)?.score || 0);
		const setupBand = setupBands.find((band) => score <= band.max) || setupBands[setupBands.length - 1];
		return {
			monthly: basePlans[plan].monthly,
			setupBand,
			score
		};
	}, [
		plan,
		sns,
		line,
		web,
		creative
	]);
	const contactParams = useMemo(() => new URLSearchParams({
		type: "entsumugi",
		source: "estimate",
		plan: basePlans[plan].name,
		monthly: `${yen(result.monthly)}円 / 月`,
		setup: result.setupBand.label,
		sns: findLabel(snsOptions, sns),
		line: findLabel(lineOptions, line),
		web: findLabel(webOptions, web),
		creative: findLabel(creativeOptions, creative)
	}).toString(), [
		creative,
		line,
		plan,
		result.monthly,
		result.setupBand.label,
		sns,
		web
	]);
	function resetStartupPreset() {
		setPlan("basic");
		setSns("newOne");
		setLine("new");
		setWeb("newSite");
		setCreative("none");
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "enPage enToolPage enPublicEstimatePage",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "enHeader",
				children: /* @__PURE__ */ jsxs("div", {
					className: "enHeaderInner",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/entsumugi",
						className: "enBrand",
						children: [/* @__PURE__ */ jsx("strong", { children: "縁紡" }), /* @__PURE__ */ jsx("span", { children: "議員サポートデスク" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "enHeaderActions",
						children: [/* @__PURE__ */ jsx(Link, {
							className: "enBackLink",
							to: "/entsumugi/diagnosis",
							children: "コース診断"
						}), /* @__PURE__ */ jsx(Link, {
							className: "enBackLink",
							to: "/entsumugi",
							children: "縁紡トップへ"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "enToolHero enEstimateHero enPublicEstimateHero",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "enPills enToolPills",
						children: [/* @__PURE__ */ jsx("span", { children: "ざっくり料金目安" }), /* @__PURE__ */ jsx("span", { children: "正式見積ではありません" })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "enEyebrow",
						children: "PRICE GUIDE"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "enPublicEstimateCatch",
						children: "まずは、料金感だけ。"
					}),
					/* @__PURE__ */ jsx("h1", { children: "料金目安シミュレーター" }),
					/* @__PURE__ */ jsx("p", { children: "月額コースと現在の準備状況を選ぶと、初期費用や追加制作を細かく積み上げず、 おおまかな料金帯だけ確認できます。" })
				]
			}),
			preset === "startup" ? /* @__PURE__ */ jsxs("div", {
				className: "enPresetBanner enPublicPresetBanner",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("strong", { children: "候補者向けスタートアップに近い条件を選択済みです" }), /* @__PURE__ */ jsx("p", { children: "SNS新規1媒体・LINE公式・新規HP・基本運用を想定した状態です。" })] }), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: resetStartupPreset,
					children: "初期条件に戻す"
				})]
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "enPublicEstimateLayout",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "enPublicEstimateForm",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "enEstimateBlock enPublicEstimateBlock",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "enEyebrow",
									children: "STEP 1"
								}),
								/* @__PURE__ */ jsx("h2", { children: "月額コース" }),
								/* @__PURE__ */ jsx("p", {
									className: "enEstimateLead",
									children: "まず、継続的にどこまで任せたいかを選びます。"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "enPublicPlanGrid",
									children: Object.entries(basePlans).map(([key, item]) => /* @__PURE__ */ jsxs("label", {
										className: `enPublicPlanOption ${plan === key ? "selected" : ""}`,
										children: [/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "plan",
											checked: plan === key,
											onChange: () => setPlan(key)
										}), /* @__PURE__ */ jsxs("span", { children: [
											/* @__PURE__ */ jsx("strong", { children: item.name }),
											/* @__PURE__ */ jsxs("b", { children: [yen(item.monthly), "円 / 月"] }),
											/* @__PURE__ */ jsx("small", { children: item.note })
										] })]
									}, key))
								}),
								plan === "ai" || plan === "busy" ? /* @__PURE__ */ jsx("p", {
									className: "enAiAddonNote",
									children: "AI秘書の利用回数を増やしたい場合は、追加枠を1枠1,000円で追加できます。"
								}) : null
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enEstimateBlock enPublicEstimateBlock",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "enEyebrow",
									children: "STEP 2"
								}),
								/* @__PURE__ */ jsx("h2", { children: "今の準備状況" }),
								/* @__PURE__ */ jsx("p", {
									className: "enEstimateLead",
									children: "単価や数量ではなく、「何を準備したいか」だけ選んでください。"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "enPublicQuestionGroup",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "enPublicQuestionHead",
										children: [/* @__PURE__ */ jsx("span", { children: "01" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "SNS" }), /* @__PURE__ */ jsx("p", { children: "アカウントの立ち上げ・引継ぎについて" })] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "enPublicChoiceGrid",
										children: snsOptions.map((item) => /* @__PURE__ */ jsxs("label", {
											className: `enPublicChoice ${sns === item.value ? "selected" : ""}`,
											children: [/* @__PURE__ */ jsx("input", {
												type: "radio",
												name: "sns",
												checked: sns === item.value,
												onChange: () => setSns(item.value)
											}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: item.label }), /* @__PURE__ */ jsx("small", { children: item.text })] })]
										}, item.value))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "enPublicQuestionGroup compact",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "enPublicQuestionHead",
										children: [/* @__PURE__ */ jsx("span", { children: "02" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "LINE公式" }), /* @__PURE__ */ jsx("p", { children: "新しく準備する必要があるか" })] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "enPublicChoiceGrid two",
										children: lineOptions.map((item) => /* @__PURE__ */ jsxs("label", {
											className: `enPublicChoice ${line === item.value ? "selected" : ""}`,
											children: [/* @__PURE__ */ jsx("input", {
												type: "radio",
												name: "line",
												checked: line === item.value,
												onChange: () => setLine(item.value)
											}), /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("strong", { children: item.label }) })]
										}, item.value))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "enPublicQuestionGroup",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "enPublicQuestionHead",
										children: [/* @__PURE__ */ jsx("span", { children: "03" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: "HP・LP" }), /* @__PURE__ */ jsx("p", { children: "WEB側で必要になりそうな準備" })] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "enPublicChoiceGrid",
										children: webOptions.map((item) => /* @__PURE__ */ jsxs("label", {
											className: `enPublicChoice ${web === item.value ? "selected" : ""}`,
											children: [/* @__PURE__ */ jsx("input", {
												type: "radio",
												name: "web",
												checked: web === item.value,
												onChange: () => setWeb(item.value)
											}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: item.label }), /* @__PURE__ */ jsx("small", { children: item.text })] })]
										}, item.value))
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enEstimateBlock enPublicEstimateBlock",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "enEyebrow",
									children: "STEP 3"
								}),
								/* @__PURE__ */ jsx("h2", { children: "追加制作のイメージ" }),
								/* @__PURE__ */ jsx("p", {
									className: "enEstimateLead",
									children: "動画・画像・大型制作などがどのくらいありそうかを選びます。"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "enPublicChoiceGrid",
									children: creativeOptions.map((item) => /* @__PURE__ */ jsxs("label", {
										className: `enPublicChoice ${creative === item.value ? "selected" : ""}`,
										children: [/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "creative",
											checked: creative === item.value,
											onChange: () => setCreative(item.value)
										}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("strong", { children: item.label }), /* @__PURE__ */ jsx("small", { children: item.text })] })]
									}, item.value))
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "enPublicEstimateResult",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "enEyebrow",
							children: "PRICE RANGE"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "enSectionCatch",
							children: "今の選択だと"
						}),
						/* @__PURE__ */ jsx("h2", { children: "このくらいが目安です。" }),
						/* @__PURE__ */ jsxs("div", {
							className: "enPublicEstimateMainPrice",
							children: [
								/* @__PURE__ */ jsx("span", { children: "月額" }),
								/* @__PURE__ */ jsxs("strong", { children: [yen(result.monthly), /* @__PURE__ */ jsx("small", { children: "円 / 月" })] }),
								/* @__PURE__ */ jsx("p", { children: basePlans[plan].name })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enPublicEstimateBand",
							children: [
								/* @__PURE__ */ jsx("span", { children: "初期設定・追加制作の目安" }),
								/* @__PURE__ */ jsx("strong", { children: result.setupBand.label }),
								/* @__PURE__ */ jsx("p", { children: result.setupBand.sub })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enPublicEstimateSelections",
							children: [
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "SNS" }), /* @__PURE__ */ jsx("strong", { children: findLabel(snsOptions, sns) })] }),
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "LINE" }), /* @__PURE__ */ jsx("strong", { children: findLabel(lineOptions, line) })] }),
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "WEB" }), /* @__PURE__ */ jsx("strong", { children: findLabel(webOptions, web) })] }),
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("span", { children: "追加制作" }), /* @__PURE__ */ jsx("strong", { children: findLabel(creativeOptions, creative) })] })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enPublicEstimateNotice",
							children: [/* @__PURE__ */ jsx("strong", { children: "これは「料金感」を見るためのシミュレーションです" }), /* @__PURE__ */ jsx("p", { children: "個別の単価や数量を積み上げた正式見積ではありません。 実際の作業範囲・既存環境・素材・運用頻度を確認したうえで、正式な料金をお伝えします。" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "enResultActions enPublicEstimateActions",
							children: [/* @__PURE__ */ jsx(Link, {
								className: "enButton primary",
								to: `/contact?${contactParams}`,
								children: "この条件で相談する →"
							}), /* @__PURE__ */ jsx(Link, {
								className: "enButton secondary",
								to: "/entsumugi/diagnosis",
								children: "コース診断へ戻る"
							})]
						})
					]
				})]
			})
		]
	});
}
function PageAssistNav() {
	const location = useLocation();
	const [showTop, setShowTop] = useState(false);
	const isHome = location.pathname === "/";
	useEffect(() => {
		function handleScroll() {
			setShowTop(window.scrollY > 240);
		}
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	if (isHome && !showTop) return null;
	return /* @__PURE__ */ jsxs("nav", {
		className: "pageAssistNav",
		"aria-label": "ページ補助ナビ",
		children: [!isHome ? /* @__PURE__ */ jsx(Link, {
			className: "pageAssistButton",
			to: "/",
			children: "HOME"
		}) : null, showTop ? /* @__PURE__ */ jsx("button", {
			className: "pageAssistButton",
			type: "button",
			onClick: scrollToTop,
			children: "TOP"
		}) : null]
	});
}
var SITE_URL = "https://www.pukulab.com";
var SITE_NAME = "Puku Lab";
var GA_MEASUREMENT_ID = "G-6WET7857MJ";
var DEFAULT_OGP_IMAGE = "/ogp/pukulab-ogp.png";
var PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.pukulab.makilog";
var notFoundDescription = "指定されたページは見つかりませんでした。Puku Labのホーム、アプリ紹介、制作相談室、ギャラリーから目的のページを探してみてください。";
var organizationData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Puku Lab",
	url: SITE_URL,
	description: "Puku Labは、アプリ・AIビジュアル・HP制作・LP制作をつなぎながら育てている個人開発の研究所です。",
	sameAs: [
		"https://x.com/pukurin5573607",
		"https://note.com/rich_bison8482",
		"https://www.pixiv.net/users/126319212"
	]
};
var pageMetaMap = {
	"/": {
		title: "Puku Lab | ワクワクとドキドキが増えていく研究所",
		description: "Puku Labは、黒板の中の2D研究室でアプリ・AI画像・遊びの実験を育てている個人開発の研究所です。ワクワクとドキドキが少しずつ増えていくものを作っています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: [organizationData, {
			"@context": "https://schema.org",
			"@type": "WebSite",
			name: "Puku Lab",
			url: SITE_URL,
			description: "アプリ、AI画像、HP制作、LP制作、遊びの実験を育てる個人開発の研究所です。",
			publisher: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}]
	},
	"/apps": {
		title: "アプリ紹介 | Puku Lab",
		description: "Puku Labで開発しているアプリを紹介しています。巻ログを中心に、これから育っていくプロジェクトもまとめています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: {
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Puku Lab アプリ紹介",
			url: `${SITE_URL}/apps`,
			description: "Puku Labで開発しているアプリやプロトタイプを紹介するページです。",
			publisher: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}
	},
	"/apps/kanlog": {
		title: "巻ログ | 漫画・ラノベのコレクション管理アプリ",
		description: "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。所持巻確認、抜け巻チェック、ダブり買い防止にも役立ちます。",
		image: kanlog_home_default,
		robots: "index, follow",
		structuredData: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "巻ログ",
			applicationCategory: "LifestyleApplication",
			operatingSystem: "Android",
			url: `${SITE_URL}/apps/kanlog`,
			downloadUrl: PLAY_STORE_URL,
			description: "巻ログは、持っている漫画やラノベを登録して、自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。",
			publisher: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			},
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "JPY"
			}
		}
	},
	"/gallery": {
		title: "AIビジュアル実験室 | Puku Lab",
		description: "AIを使って作ったイラストや写真風ビジュアルを、実験結果として展示しているPuku LabのAIビジュアル実験室です。",
		image: "/gallery/photo-style/photo-001.png",
		robots: "index, follow",
		structuredData: {
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "AIビジュアル実験室",
			url: `${SITE_URL}/gallery`,
			description: "AIを使って作ったイラストや写真風ビジュアルを展示するPuku Labのギャラリーページです。",
			publisher: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}
	},
	"/gallery/illustrations": {
		title: "イラスト実験室 | Puku Lab",
		description: "Puku Labのイラスト実験室です。水彩・アニメ調・キャラクター絵など、AIで試したビジュアル表現を展示していきます。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow"
	},
	"/gallery/photo-style": {
		title: "写真風実験室 | Puku Lab",
		description: "Puku Labの写真風実験室です。リアル寄りの空気感や、写真風AIビジュアルの実験結果を保管しています。",
		image: "/gallery/photo-style/photo-001.png",
		robots: "index, follow"
	},
	"/gallery/others": {
		title: "没案・試作ログ | Puku Lab",
		description: "Puku Labの没案・試作ログです。ロゴ案、UI風画像、試作ビジュアルなど、分類しきれない実験画像を保管しています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow"
	},
	"/works": {
		title: "サービス・制作支援 | Puku Lab WORKS",
		description: "Puku Labが提供するサービス・制作支援の一覧ページです。HP・LP制作と、地方議員向けSNS運用・情報発信支援サービス『縁紡』を紹介しています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: {
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Puku Lab WORKS",
			url: `${SITE_URL}/works`,
			description: "Puku Labが提供するHP・LP制作と、地方議員向け情報発信支援サービス『縁紡』を紹介するサービス一覧ページです。",
			publisher: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}
	},
	"/works/web": {
		title: "HP制作・LP制作・個人向けホームページ制作 | Puku Lab制作相談室",
		description: "個人開発者・創作者・小さなお店向けに、ホームページ制作、LP制作、アプリ紹介ページ、ポートフォリオ制作、SNS導線整理をサポートします。全国オンライン対応。料金目安と制作実績も掲載しています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: [
			{
				"@context": "https://schema.org",
				"@type": "Service",
				name: "個人向けホームページ制作・LP制作",
				serviceType: [
					"ホームページ制作",
					"LP制作",
					"個人向けホームページ制作",
					"小規模ホームページ制作",
					"アプリ紹介ページ制作",
					"ポートフォリオ制作",
					"SNS導線整理",
					"運営導線サポート"
				],
				url: `${SITE_URL}/works/web`,
				areaServed: {
					"@type": "Country",
					name: "日本"
				},
				description: "Puku Labは、個人開発者・創作者・小さなお店向けに、ホームページ制作、LP制作、アプリ紹介ページ制作、SNS導線整理をサポートします。",
				provider: {
					"@type": "Organization",
					name: "Puku Lab",
					url: SITE_URL
				}
			},
			{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "個人でもホームページ制作を相談できますか？",
						acceptedAnswer: {
							"@type": "Answer",
							text: "はい。個人開発者、創作者、個人活動、小さなお店など、大きな制作会社に頼むほどではない規模のホームページ制作やLP制作を想定しています。"
						}
					},
					{
						"@type": "Question",
						name: "アプリ紹介ページやサービス紹介LPも作れますか？",
						acceptedAnswer: {
							"@type": "Answer",
							text: "対応できます。アプリの特徴、画面説明、料金、Google Playや問い合わせへの導線を整理し、1ページで伝わる紹介LPとして制作します。"
						}
					},
					{
						"@type": "Question",
						name: "文章や構成がまだ決まっていなくても相談できますか？",
						acceptedAnswer: {
							"@type": "Answer",
							text: "大丈夫です。作りたいものがふわっとしている段階でも、誰に何を届けたいか、どのページが必要か、どんな導線にするかを一緒に整理します。"
						}
					},
					{
						"@type": "Question",
						name: "遠方からでも依頼できますか？",
						acceptedAnswer: {
							"@type": "Answer",
							text: "はい。ホームページ制作やLP制作はオンラインで全国から相談できます。やり取りしながら、必要な情報やページ構成を一緒に整理します。"
						}
					}
				]
			},
			{
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Puku Lab",
						item: SITE_URL
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "WORKS",
						item: `${SITE_URL}/works`
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "HP・LP制作",
						item: `${SITE_URL}/works/web`
					}
				]
			}
		]
	},
	"/entsumugi": {
		title: "縁紡 | 地方議員向けSNS運用・情報発信支援サービス | Puku Lab",
		description: "縁紡（えんつむぎ）は、地方議員向けのSNS運用・情報発信支援サービスです。日々の活動、予定、写真、原稿を整理し、継続的な情報発信につなげる仕組みと運用を支援します。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: [{
			"@context": "https://schema.org",
			"@type": "Service",
			name: "縁紡",
			alternateName: "えんつむぎ",
			serviceType: [
				"地方議員向けSNS運用支援",
				"地方議員向け情報発信支援",
				"SNS原稿作成支援",
				"議員活動の情報整理"
			],
			url: `${SITE_URL}/entsumugi`,
			areaServed: {
				"@type": "Country",
				name: "日本"
			},
			audience: {
				"@type": "Audience",
				audienceType: "地方議員"
			},
			description: "地方議員の日々の活動・予定・写真・原稿を整理し、SNSなどで継続的に情報発信する流れを支えるサービスです。",
			provider: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}, {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Puku Lab",
					item: SITE_URL
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "WORKS",
					item: `${SITE_URL}/works`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "縁紡",
					item: `${SITE_URL}/entsumugi`
				}
			]
		}]
	},
	"/entsumugi/startup": {
		title: "地方選候補者向け情報発信スタートアップ | 縁紡 | Puku Lab",
		description: "統一地方選に向けて、SNS・LINE公式・HPなど候補者の情報発信環境をまとめて整える縁紡のスタートアップ支援ページです。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: [{
			"@context": "https://schema.org",
			"@type": "Service",
			name: "縁紡 候補者向け情報発信スタートアップ",
			serviceType: "地方選候補者向け情報発信環境の立ち上げ支援",
			url: `${SITE_URL}/entsumugi/startup`,
			areaServed: {
				"@type": "Country",
				name: "日本"
			},
			provider: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			},
			description: "SNS新規立ち上げ、LINE公式初期設定、候補者向け簡易HP制作、継続的な情報発信支援を組み合わせるスタートアップ支援です。"
		}, {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Puku Lab",
					item: SITE_URL
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "縁紡",
					item: `${SITE_URL}/entsumugi`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "候補者向けスタートアップ",
					item: `${SITE_URL}/entsumugi/startup`
				}
			]
		}]
	},
	"/entsumugi/diagnosis": {
		title: "縁紡 30秒コース診断 | 地方議員向け情報発信支援",
		description: "3つの質問から、縁紡のアプリ利用・AI秘書・基本運用・広報運用・外部広報室の中で、現在の希望に近いコースを簡易診断します。",
		image: DEFAULT_OGP_IMAGE,
		robots: "noindex, follow"
	},
	"/entsumugi/estimate": {
		title: "縁紡 料金シミュレーター | 地方議員向け情報発信支援",
		description: "縁紡の月額コース、SNS初期設定、原稿、動画、WEB制作などを選び、概算料金を確認できる料金シミュレーターです。",
		image: DEFAULT_OGP_IMAGE,
		robots: "noindex, follow"
	},
	"/questionnaire": {
		title: "アンケート | Puku Lab",
		description: "Puku Labのアプリや今後の開発の参考にするためのアンケートページです。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow"
	},
	"/contact": {
		title: "お問い合わせ | Puku Lab",
		description: "Puku Labへのお問い合わせページです。感想やご相談、HP制作・アプリ制作まわりの連絡はこちらからどうぞ。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow"
	},
	"/experiments": {
		title: "実験室 | Puku Lab",
		description: "Puku Labの実験室ページです。遊び心のある試作やコンテンツを少しずつ育てています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow"
	},
	"/about": {
		title: "ぷくりん｜元議員秘書からAI個人開発へ｜Puku Lab",
		description: "Puku Lab運営者・ぷくりんのプロフィール。元議員秘書を経てAIを活用した個人開発を始め、漫画・ラノベ管理アプリ『巻ログ』をGoogle Playで公開。HP・LP制作、文章、AIビジュアルにも取り組んでいます。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: [{
			"@context": "https://schema.org",
			"@type": "ProfilePage",
			"@id": `${SITE_URL}/about#profilepage`,
			name: "Puku Lab運営者・ぷくりんのプロフィール",
			url: `${SITE_URL}/about`,
			description: "元議員秘書を経てAIを活用した個人開発を始めた、Puku Lab運営者・ぷくりんのプロフィールページです。",
			dateModified: "2026-07-24",
			mainEntity: {
				"@type": "Person",
				"@id": `${SITE_URL}/about#pukurin`,
				name: "ぷくりん",
				alternateName: "pukurin",
				url: `${SITE_URL}/about`,
				image: `${SITE_URL}/icon.png`,
				description: "元議員秘書として3年間勤務した後、AIを活用した個人開発を開始。漫画・ラノベ管理アプリ『巻ログ』、Puku Lab公式サイト、HP・LP、AIビジュアルを制作しています。",
				sameAs: [
					"https://x.com/pukurin5573607",
					"https://note.com/rich_bison8482",
					"https://www.pixiv.net/users/126319212"
				],
				worksFor: {
					"@type": "Organization",
					name: "Puku Lab",
					url: SITE_URL
				},
				knowsAbout: [
					"AIを活用した個人開発",
					"Androidアプリ開発",
					"漫画・ラノベ管理アプリ",
					"ホームページ制作",
					"LP制作",
					"Web導線設計",
					"文章構成",
					"AIビジュアル制作"
				]
			}
		}, {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "Puku Lab",
				item: SITE_URL
			}, {
				"@type": "ListItem",
				position: 2,
				name: "ぷくりんについて",
				item: `${SITE_URL}/about`
			}]
		}]
	},
	"/secret": {
		title: "ひみつの休憩室 | Puku Lab",
		description: "Puku Labのすみっこにある、見つけた人だけのひみつの休憩室です。",
		image: DEFAULT_OGP_IMAGE,
		robots: "noindex, nofollow"
	},
	"/game": {
		title: "ゲーム実験室 | Puku Lab",
		description: "Puku Labのゲーム実験室です。ミニゲームや遊びの入口を準備しています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow"
	}
};
function getPageMeta(pathname) {
	return pageMetaMap[pathname] || {
		title: "ページが見つかりません | Puku Lab",
		description: notFoundDescription,
		image: DEFAULT_OGP_IMAGE,
		robots: "noindex, follow"
	};
}
function getCanonicalUrl(pathname) {
	if (pathname === "/") return `${SITE_URL}/`;
	return `${SITE_URL}${pathname}`;
}
function getAbsoluteImageUrl(image) {
	if (!image) return `${SITE_URL}${DEFAULT_OGP_IMAGE}`;
	if (image.startsWith("http://") || image.startsWith("https://")) return image;
	if (image.startsWith("/")) return `${SITE_URL}${image}`;
	return `${SITE_URL}/${image}`;
}
function upsertMetaByName(name, content) {
	if (!content) return;
	let tag = document.querySelector(`meta[name="${name}"]`);
	if (!tag) {
		tag = document.createElement("meta");
		tag.setAttribute("name", name);
		document.head.appendChild(tag);
	}
	tag.setAttribute("content", content);
}
function upsertMetaByProperty(property, content) {
	if (!content) return;
	let tag = document.querySelector(`meta[property="${property}"]`);
	if (!tag) {
		tag = document.createElement("meta");
		tag.setAttribute("property", property);
		document.head.appendChild(tag);
	}
	tag.setAttribute("content", content);
}
function upsertCanonical(href) {
	let tag = document.querySelector("link[rel=\"canonical\"]");
	if (!tag) {
		tag = document.createElement("link");
		tag.setAttribute("rel", "canonical");
		document.head.appendChild(tag);
	}
	tag.setAttribute("href", href);
}
function upsertJsonLd(data) {
	const id = "pukulab-json-ld";
	const oldTag = document.getElementById(id);
	if (!data) {
		if (oldTag) oldTag.remove();
		return;
	}
	const tag = oldTag || document.createElement("script");
	tag.id = id;
	tag.type = "application/ld+json";
	tag.textContent = JSON.stringify(data);
	if (!oldTag) document.head.appendChild(tag);
}
function SeoTracker() {
	const location = useLocation();
	const previousPageLocationRef = useRef(typeof document !== "undefined" ? document.referrer || "" : "");
	useEffect(() => {
		const pathname = location.pathname;
		const meta = getPageMeta(pathname);
		const canonicalUrl = getCanonicalUrl(pathname);
		const ogImageUrl = getAbsoluteImageUrl(meta.image);
		document.title = meta.title;
		upsertMetaByName("description", meta.description);
		upsertMetaByName("robots", meta.robots || "index, follow");
		upsertCanonical(canonicalUrl);
		upsertMetaByProperty("og:site_name", SITE_NAME);
		upsertMetaByProperty("og:locale", "ja_JP");
		upsertMetaByProperty("og:type", "website");
		upsertMetaByProperty("og:title", meta.title);
		upsertMetaByProperty("og:description", meta.description);
		upsertMetaByProperty("og:url", canonicalUrl);
		upsertMetaByProperty("og:image", ogImageUrl);
		upsertMetaByName("twitter:card", "summary_large_image");
		upsertMetaByName("twitter:title", meta.title);
		upsertMetaByName("twitter:description", meta.description);
		upsertMetaByName("twitter:image", ogImageUrl);
		upsertJsonLd(meta.structuredData);
		if (typeof window.gtag === "function") {
			const pageViewParams = {
				send_to: GA_MEASUREMENT_ID,
				page_title: meta.title,
				page_location: canonicalUrl
			};
			if (previousPageLocationRef.current) pageViewParams.page_referrer = previousPageLocationRef.current;
			window.gtag("event", "page_view", pageViewParams);
			previousPageLocationRef.current = canonicalUrl;
		}
	}, [location.pathname]);
	return null;
}
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "siteFooter",
		"aria-label": "サイト情報",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "siteFooterBrand",
				children: "Puku Lab"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "siteFooterText",
				children: "Small Web & App Lab"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "siteFooterCopy",
				children: "© 2026 Puku Lab"
			})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ jsx("main", {
		className: "siteFrame innerPageFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard",
			children: [
				/* @__PURE__ */ jsxs("header", {
					className: "pageHead",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "smallTag",
							children: "404 / LOST IN THE LAB"
						}),
						/* @__PURE__ */ jsx("h2", { children: "ページが見つかりません" }),
						/* @__PURE__ */ jsxs("p", { children: [
							"指定されたページは、まだ研究所の中にないみたいです。",
							/* @__PURE__ */ jsx("br", {}),
							"目的の部屋に近い入口から、もう一度探してみてください。"
						] })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "metricPanel",
					children: [/* @__PURE__ */ jsx("p", { children: "ROUTE MEMO" }), /* @__PURE__ */ jsx("strong", { children: "アプリ、制作相談室、ギャラリーなどの正式な入口へ案内します。" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "pageActions",
					children: [
						/* @__PURE__ */ jsx(Link, {
							className: "navButton",
							to: "/",
							children: "ホームへ戻る"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "navButton ghost",
							to: "/apps/kanlog",
							children: "巻ログを見る"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "navButton ghost",
							to: "/works",
							children: "制作相談室へ"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "navButton ghost",
							to: "/gallery",
							children: "ギャラリーへ"
						})
					]
				})
			]
		})
	});
}
function App() {
	const isEntsumugiPage = useLocation().pathname.startsWith("/entsumugi");
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SeoTracker, {}),
		/* @__PURE__ */ jsxs(Routes, { children: [
			/* @__PURE__ */ jsx(Route, {
				path: "/",
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/apps",
				element: /* @__PURE__ */ jsx(Apps, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/apps/kanlog",
				element: /* @__PURE__ */ jsx(Kanlog, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/gallery",
				element: /* @__PURE__ */ jsx(Gallery, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/gallery/illustrations",
				element: /* @__PURE__ */ jsx(GalleryCategory, { category: "illustrations" })
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/gallery/photo-style",
				element: /* @__PURE__ */ jsx(GalleryCategory, { category: "photo-style" })
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/gallery/others",
				element: /* @__PURE__ */ jsx(GalleryCategory, { category: "others" })
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/works",
				element: /* @__PURE__ */ jsx(WorksIndex, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/works/web",
				element: /* @__PURE__ */ jsx(Works, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/entsumugi",
				element: /* @__PURE__ */ jsx(Entsumugi, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/entsumugi/startup",
				element: /* @__PURE__ */ jsx(EntsumugiStartup, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/entsumugi/diagnosis",
				element: /* @__PURE__ */ jsx(EntsumugiDiagnosis, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/entsumugi/estimate",
				element: /* @__PURE__ */ jsx(EntsumugiEstimate, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/questionnaire",
				element: /* @__PURE__ */ jsx(Questionnaire, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/contact",
				element: /* @__PURE__ */ jsx(Contact, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/experiments",
				element: /* @__PURE__ */ jsx(Experiments, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/about",
				element: /* @__PURE__ */ jsx(About, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/secret",
				element: /* @__PURE__ */ jsx(Secret, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/game",
				element: /* @__PURE__ */ jsx(Game, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "*",
				element: /* @__PURE__ */ jsx(NotFound, {})
			})
		] }),
		!isEntsumugiPage ? /* @__PURE__ */ jsx(SiteFooter, {}) : null,
		!isEntsumugiPage ? /* @__PURE__ */ jsx(PageAssistNav, {}) : null
	] });
}
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(App, {})
	}) }));
}
export { render };
