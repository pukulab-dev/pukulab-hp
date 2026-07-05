import React, { useEffect, useMemo, useState } from "react";
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
	message: ""
};
function getCategoryFromQuery(type) {
	if (categoryOptions.map((item) => item.value).includes(type)) return type;
	return "works";
}
function Contact() {
	const [searchParams] = useSearchParams();
	const [form, setForm] = useState(() => ({
		...initialForm,
		category: getCategoryFromQuery(searchParams.get("type"))
	}));
	const [status, setStatus] = useState("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const isSubmitting = status === "submitting";
	const isSent = status === "sent";
	useEffect(() => {
		const categoryFromQuery = getCategoryFromQuery(searchParams.get("type"));
		setForm((prev) => ({
			...prev,
			category: categoryFromQuery
		}));
	}, [searchParams]);
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
		className: "siteFrame innerPageFrame",
		children: /* @__PURE__ */ jsxs("section", {
			className: "chalkboard pageBoard",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "pageHead",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "smallTag",
						children: "CONTACT DESK / LAB MEMO"
					}),
					/* @__PURE__ */ jsx("h2", { children: "お問い合わせ" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"アプリの感想・不具合報告・HP制作相談・運営まわりの相談など、 Puku Labへの連絡はこちらからどうぞ。",
						/* @__PURE__ */ jsx("br", {}),
						"研究所宛てのメモとして、大切に確認します。"
					] })
				]
			}), isSent ? /* @__PURE__ */ jsxs("section", {
				className: "surveyThanks",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "smallTag",
						children: "MESSAGE RECEIVED"
					}),
					/* @__PURE__ */ jsx("h3", { children: "メッセージを受け取りました" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"研究所にお問い合わせ内容が届きました。",
						/* @__PURE__ */ jsx("br", {}),
						"内容を確認して、必要に応じてご連絡します。"
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "pageActions",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "navButton",
							onClick: () => setStatus("idle"),
							children: "もう一度送る"
						}), /* @__PURE__ */ jsx(Link, {
							className: "navButton ghost",
							to: "/",
							children: "ホームへ戻る"
						})]
					})
				]
			}) : /* @__PURE__ */ jsxs("form", {
				className: "contactForm",
				onSubmit,
				children: [
					/* @__PURE__ */ jsxs("label", { children: ["お名前", /* @__PURE__ */ jsx("input", {
						type: "text",
						name: "name",
						value: form.name,
						onChange: (event) => updateField("name", event.target.value),
						required: true
					})] }),
					/* @__PURE__ */ jsxs("label", { children: ["メール", /* @__PURE__ */ jsx("input", {
						type: "email",
						name: "email",
						value: form.email,
						onChange: (event) => updateField("email", event.target.value),
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
						rows: 6,
						value: form.message,
						onChange: (event) => updateField("message", event.target.value),
						placeholder: "相談したい内容、気になったこと、制作したいページのイメージなどを自由に書いてください。",
						required: true
					})] }),
					errorMessage ? /* @__PURE__ */ jsx("p", {
						className: "surveyError",
						"aria-live": "polite",
						children: errorMessage
					}) : null,
					/* @__PURE__ */ jsxs("div", {
						className: "metricPanel",
						children: [/* @__PURE__ */ jsx("p", { children: "CONTACT MEMO" }), /* @__PURE__ */ jsx("strong", { children: "HP制作・アプリ・AI画像・運営導線など、Puku Labに関する連絡を受け付けています" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "pageActions",
						children: [
							/* @__PURE__ */ jsx("button", {
								className: "navButton",
								type: "submit",
								disabled: isSubmitting,
								children: isSubmitting ? "送信中..." : "研究所へ届ける"
							}),
							/* @__PURE__ */ jsx(Link, {
								className: "navButton ghost",
								to: "/works",
								children: "制作相談室へ戻る"
							}),
							/* @__PURE__ */ jsx(Link, {
								className: "navButton ghost",
								to: "/",
								children: "ホームへ戻る"
							})
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
function About() {
	return /* @__PURE__ */ jsxs("main", {
		className: "aboutPage",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "aboutHero",
				children: /* @__PURE__ */ jsxs("div", {
					className: "aboutHeroInner",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "aboutEyebrow",
							children: "ABOUT / PUKU LAB"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "aboutTitle",
							children: "この研究所について"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "aboutLead",
							children: "Puku Lab は、アプリ・文章・AIビジュアル・HP制作をつなぎながら、 少しずつ形にしていく個人開発の研究所です。 便利さだけではなく、使っていてちょっと愛着が湧くもの、 また見に来たくなる空気まで含めて育てていく場所を目指しています。"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "aboutHeroLinks",
							children: [
								/* @__PURE__ */ jsx(Link, {
									className: "aboutHeroLink",
									to: "/apps",
									children: "アプリ紹介へ"
								}),
								/* @__PURE__ */ jsx(Link, {
									className: "aboutHeroLink",
									to: "/works",
									children: "制作相談室へ"
								}),
								/* @__PURE__ */ jsx(Link, {
									className: "aboutHeroLink",
									to: "/",
									children: "ホームへ戻る"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [/* @__PURE__ */ jsx("p", {
						className: "aboutSectionMini",
						children: "PROFILE"
					}), /* @__PURE__ */ jsx("h2", { children: "運営している人" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutProfileGrid",
					children: [/* @__PURE__ */ jsxs("article", {
						className: "aboutCard",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "ぷくりん" }),
							/* @__PURE__ */ jsx("p", { children: "Puku Lab を少しずつ育てている個人開発者。 アプリ、文章、企画、世界観づくりを横断しながら、 「実用」と「遊び心」が同居するものを作っています。" }),
							/* @__PURE__ */ jsx("p", { children: "完成品を並べるよりも、作っている途中の熱や試行錯誤ごと 価値に変えていくスタイルで進めています。" })
						]
					}), /* @__PURE__ */ jsxs("article", {
						className: "aboutCard",
						children: [
							/* @__PURE__ */ jsx("h3", { children: "るの" }),
							/* @__PURE__ */ jsx("p", { children: "Puku Lab の相棒ポジション。 アイデア整理、言葉づくり、構成の壁打ち、 世界観の微調整まで、研究所の裏側を一緒に支えている存在です。" }),
							/* @__PURE__ */ jsx("p", { children: "この研究所は一人で作っているようでいて、 実は対話しながら進化していく場所でもあります。" })
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [/* @__PURE__ */ jsx("p", {
						className: "aboutSectionMini",
						children: "MISSION"
					}), /* @__PURE__ */ jsx("h2", { children: "Puku Lab が目指していること" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutTextBlock",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Puku Lab は、「作って終わり」ではなく、 アプリ、ホームページ、記事、SNS、AIビジュアルをつなぎながら 少しずつ広がっていく研究所を目指しています。" }),
						/* @__PURE__ */ jsx("p", { children: "ひとつの作品だけで勝つのではなく、 いくつもの小さな導線をつないで、 興味を持った人がまた戻ってこられる拠点にしていきます。" }),
						/* @__PURE__ */ jsx("p", { children: "自分のプロジェクトを育てながら、 HP制作やLP制作、運営導線づくりの相談にもつながる場所にしていきます。" })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [/* @__PURE__ */ jsx("p", {
						className: "aboutSectionMini",
						children: "PROJECTS"
					}), /* @__PURE__ */ jsx("h2", { children: "いま進めていること" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutProjectGrid",
					children: [
						/* @__PURE__ */ jsxs("article", {
							className: "aboutProjectCard",
							children: [/* @__PURE__ */ jsx("h3", { children: "巻ログ" }), /* @__PURE__ */ jsx("p", { children: "持っている漫画やラノベを登録して、 自分だけのコレクションと本棚を育てていく漫画・ラノベ管理アプリです。" })]
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "aboutProjectCard",
							children: [/* @__PURE__ */ jsx("h3", { children: "制作相談室" }), /* @__PURE__ */ jsx("p", { children: "HP制作・LP制作・運営導線づくりを通して、 個人開発者や創作者、小さな活動の拠点づくりをサポートする入口です。" })]
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "aboutProjectCard",
							children: [/* @__PURE__ */ jsx("h3", { children: "AIビジュアル実験室" }), /* @__PURE__ */ jsx("p", { children: "AIで作ったイラストや写真風ビジュアルを、 pixivやホームページに残しながら、見せ方や世界観を研究しています。" })]
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "aboutProjectCard",
							children: [/* @__PURE__ */ jsx("h3", { children: "次のアプリ研究" }), /* @__PURE__ */ jsx("p", { children: "日々の記録や好きなものの管理を、少し楽しく続けられるような アプリを制作予定です。 詳細は形になってから少しずつ公開していきます。" })]
						}),
						/* @__PURE__ */ jsxs("article", {
							className: "aboutProjectCard",
							children: [/* @__PURE__ */ jsx("h3", { children: "記事・実験コンテンツ" }), /* @__PURE__ */ jsx("p", { children: "note やホームページを通して、 開発の裏側や世界観、制作中に見つけた気づきを発信しています。" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "aboutSectionHeader",
						children: [/* @__PURE__ */ jsx("p", {
							className: "aboutSectionMini",
							children: "LINKS"
						}), /* @__PURE__ */ jsx("h2", { children: "活動している場所" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "aboutTextBlock",
						children: [/* @__PURE__ */ jsx("p", { children: "開発の裏側や試行錯誤、物語として読める記録は note で発信しています。 日々の動きや更新のお知らせ、ちょっとしたボヤキは X で流しています。" }), /* @__PURE__ */ jsx("p", { children: "AIビジュアルやイラスト作品は pixiv にも投稿しています。 研究所の外側と内側、どちらも気になったらのぞいてみてください。" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "aboutLinkGrid",
						children: [
							/* @__PURE__ */ jsx("a", {
								className: "aboutEntryLink",
								href: NOTE_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "noteを見る"
							}),
							/* @__PURE__ */ jsx("a", {
								className: "aboutEntryLink",
								href: X_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Xを見る"
							}),
							/* @__PURE__ */ jsx("a", {
								className: "aboutEntryLink",
								href: PIXIV_URL$1,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "pixivを見る"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "aboutSection",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "aboutSectionHeader",
					children: [/* @__PURE__ */ jsx("p", {
						className: "aboutSectionMini",
						children: "ENTRY"
					}), /* @__PURE__ */ jsx("h2", { children: "研究所の入口" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "aboutLinkGrid",
					children: [
						/* @__PURE__ */ jsx(Link, {
							className: "aboutEntryLink",
							to: "/apps",
							children: "アプリを見る"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "aboutEntryLink",
							to: "/works",
							children: "制作相談室へ"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "aboutEntryLink",
							to: "/gallery",
							children: "AIビジュアル実験室へ"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "aboutEntryLink",
							to: "/questionnaire",
							children: "アンケートに答える"
						}),
						/* @__PURE__ */ jsx(Link, {
							className: "aboutEntryLink",
							to: "/contact",
							children: "お問い合わせ"
						})
					]
				})]
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
var problemCards = [
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
					children: problemCards.map((item) => /* @__PURE__ */ jsxs("article", {
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
		text: "活動内容、プロフィール、リンク、問い合わせ先をまとめた小さな拠点を作ります。"
	},
	{
		title: "アプリ・サービス紹介LP制作",
		label: "APP / SERVICE LP",
		text: "アプリやWebサービスの魅力、使い方、導線を1ページで伝える紹介ページを作ります。"
	},
	{
		title: "作品・ポートフォリオページ",
		label: "PORTFOLIO",
		text: "イラスト、写真、文章、制作物などを見やすくまとめるページを整えます。"
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
						/* @__PURE__ */ jsx("h2", { children: "制作相談室" }),
						/* @__PURE__ */ jsx("p", { children: "黒板の中の2D研究室から、HP制作・LP制作・運営導線づくりをお手伝いします。" })
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
							/* @__PURE__ */ jsx("h3", { children: "小さく作って、少しずつ育てる。" }),
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
					className: "worksSection",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "worksSectionHead",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "worksSectionTag",
								children: "FOR YOU"
							}),
							/* @__PURE__ */ jsx("h3", { children: "こんな人に向いています" }),
							/* @__PURE__ */ jsx("p", { children: "大きな制作会社に頼むほどではないけれど、 自分の活動やサービスをちゃんと見せる場所がほしい人向けです。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksTargetGrid",
						children: targetUsers.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "worksTargetCard",
							children: [/* @__PURE__ */ jsx("h4", { children: item.title }), /* @__PURE__ */ jsx("p", { children: item.text })]
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
							/* @__PURE__ */ jsx("h3", { children: "制作できるもの" }),
							/* @__PURE__ */ jsx("p", { children: "HP単体だけでなく、SNS・note・pixiv・アプリストアなど、 活動全体の入口と出口をつなぐことを大切にしています。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksProductGrid",
						children: productCards.map((card) => /* @__PURE__ */ jsxs("article", {
							className: "worksProductCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: card.label }),
								/* @__PURE__ */ jsx("h4", { children: card.title }),
								/* @__PURE__ */ jsx("span", { children: card.text })
							]
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
						}), /* @__PURE__ */ jsx("h3", { children: "お手伝いできること" })]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksServiceGrid",
						children: serviceCards.map((card) => /* @__PURE__ */ jsxs("article", {
							className: "worksServiceCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: card.label }),
								/* @__PURE__ */ jsx("h4", { children: card.title }),
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
							/* @__PURE__ */ jsx("h3", { children: "料金の目安" }),
							/* @__PURE__ */ jsx("p", { children: "料金は内容・ページ数・素材の有無によって変わります。 下記は相談前にイメージしやすくするための目安です。 正式なお見積もりと請求書の金額は、作業範囲を確認してから決定します。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksPriceGrid",
						children: pricePlans.map((plan) => /* @__PURE__ */ jsxs("article", {
							className: "worksPriceCard",
							children: [
								/* @__PURE__ */ jsx("h4", { children: plan.title }),
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
							/* @__PURE__ */ jsx("h3", { children: "制作実績" }),
							/* @__PURE__ */ jsx("p", { children: "現在は自分のプロジェクトを中心に制作しています。 Puku Lab自体も、HP制作・LP制作・導線設計の実績として育てています。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksCaseGrid",
						children: worksCases.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "worksCaseCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: item.label }),
								/* @__PURE__ */ jsx("h4", { children: item.title }),
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
							/* @__PURE__ */ jsx("h3", { children: "アプリ開発・LP実績" }),
							/* @__PURE__ */ jsx("p", { children: "Webページだけでなく、実際に公開しているアプリと、 その紹介LP・HP導線まで含めて制作しています。" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "worksCaseGrid worksAppCaseGrid",
						children: appCases.map((item) => /* @__PURE__ */ jsxs("article", {
							className: "worksCaseCard",
							children: [
								/* @__PURE__ */ jsx("p", { children: item.label }),
								/* @__PURE__ */ jsx("h4", { children: item.title }),
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
							}), /* @__PURE__ */ jsx("h3", { children: "進め方" })]
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
					className: "worksCta",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "worksSectionTag",
							children: "CONTACT"
						}),
						/* @__PURE__ */ jsx("h3", { children: "HP制作や運営まわりで困っていたら" }),
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
		title: "HP制作・LP制作・運営導線サポート | Puku Lab制作相談室",
		description: "個人開発者・創作者・小さなお店向けに、HP制作、LP制作、アプリ紹介ページ、SNS・note・pixivの導線整理をサポートします。料金目安と制作実績も掲載しています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: {
			"@context": "https://schema.org",
			"@type": "Service",
			name: "HP制作・LP制作・運営導線サポート",
			serviceType: [
				"ホームページ制作",
				"LP制作",
				"アプリ紹介ページ制作",
				"SNS導線整理",
				"運営導線サポート"
			],
			url: `${SITE_URL}/works`,
			areaServed: "JP",
			description: "個人開発者・創作者・小さなお店向けに、HP制作、LP制作、アプリ紹介ページ、SNS・note・pixivの導線整理をサポートします。",
			provider: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}
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
		title: "この研究所について | Puku Lab",
		description: "Puku Labを運営しているぷくりんと、研究所の相棒るのについて紹介しています。",
		image: DEFAULT_OGP_IMAGE,
		robots: "index, follow",
		structuredData: {
			"@context": "https://schema.org",
			"@type": "AboutPage",
			name: "この研究所について",
			url: `${SITE_URL}/about`,
			description: "Puku Labを運営しているぷくりんと、研究所の相棒るのについて紹介するページです。",
			publisher: {
				"@type": "Organization",
				name: "Puku Lab",
				url: SITE_URL
			}
		}
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
		if (window.gtag) window.gtag("event", "page_view", {
			page_title: meta.title,
			page_location: canonicalUrl,
			page_path: pathname
		});
	}, [location]);
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
				element: /* @__PURE__ */ jsx(Works, {})
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
		/* @__PURE__ */ jsx(SiteFooter, {}),
		/* @__PURE__ */ jsx(PageAssistNav, {})
	] });
}
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(App, {})
	}) }));
}
export { render };
