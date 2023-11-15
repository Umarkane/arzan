exports.id = 9750;
exports.ids = [9750];
exports.modules = {

/***/ 9750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Menu6)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6297);
/* harmony import */ var react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_18_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3964);
/* harmony import */ var react_18_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_18_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_4__);





const images = [
    {
        id: 1,
        url: "/images/menu/burger-11.jpg",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        id: 2,
        url: "/images/menu/burger-12.jpg",
        title: "Image 2",
        description: "This is the second image"
    },
    {
        id: 3,
        url: "/images/menu/burger-13.jpg",
        title: "Image 3",
        description: "This is the third image"
    },
    {
        id: 4,
        url: "/images/menu/burger-14.jpg",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        id: 5,
        url: "/images/menu/burger-15.jpg",
        title: "Image 2",
        description: "This is the second image"
    },
    {
        id: 6,
        url: "/images/menu/burger-16.jpg",
        title: "Image 3",
        description: "This is the third image"
    },
    {
        id: 7,
        url: "/images/menu/burger-17.jpg",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        id: 8,
        url: "/images/menu/burger-18.jpg",
        title: "Image 2",
        description: "This is the second image"
    }
];
function Menu6({ helperCls  }) {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [photoIndex, setPhotoIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const openLightbox = (index)=>{
        setPhotoIndex(index);
        setIsOpen(true);
    };
    const closeLightbox = ()=>{
        setIsOpen(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "menu-6",
            className: `wide-70 menu-section division ${helperCls ? helperCls : ""}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-10 offset-lg-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "section-title mb-60 text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "h2-xl red-color",
                                            children: "Explore Our Menu"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "p-xl",
                                            children: "Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-sm-6 col-lg-3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "menu-6-item bg-white",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "menu-6-img rel",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hover-overlay",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "img-fluid",
                                                            src: image.url,
                                                            alt: "menu-image"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "item-code bg-tra-dark",
                                                            children: "Code: 0850"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "menu-img-zoom ico-25",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                onClick: ()=>openLightbox(index),
                                                                className: "image-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "flaticon-zoom"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "menu-6-txt rel",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-rating",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "stars-rating stars-lg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-star"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-star"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-star"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-star"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-star-half-alt"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "like-ico ico-25",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "flaticon-heart"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "h5-sm coffee-color",
                                                        children: "Crispy Chicken"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "grey-color",
                                                        children: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "menu-6-price bg-coffee",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            className: "h5-xs yellow-color",
                                                            children: "$8.50"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "add-to-cart bg-yellow ico-10",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/product-single",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "flaticon-shopping-bag"
                                                                }),
                                                                " Add to Cart"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index))
                        }),
                        isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
                            mainSrc: images[photoIndex].url,
                            nextSrc: images[(photoIndex + 1) % images.length].url,
                            prevSrc: images[(photoIndex + images.length - 1) % images.length].url,
                            onCloseRequest: closeLightbox,
                            onMovePrevRequest: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length),
                            onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % images.length),
                            // imageTitle={images[photoIndex].title}
                            // imageCaption={images[photoIndex].description}
                            className: "abc"
                        })
                    ]
                }),
                "    "
            ]
        })
    });
}


/***/ }),

/***/ 3964:
/***/ (() => {



/***/ })

};
;