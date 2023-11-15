"use strict";
exports.id = 5399;
exports.ids = [5399];
exports.modules = {

/***/ 5399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Gallery2)
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
        url: "/images/gallery/img-01.jpg",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        id: 2,
        url: "/images/gallery/img-02.jpg",
        title: "Image 2",
        description: "This is the second image"
    },
    {
        id: 3,
        url: "/images/gallery/img-03.jpg",
        title: "Image 3",
        description: "This is the third image"
    },
    {
        id: 4,
        url: "/images/gallery/img-04.jpg",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        id: 5,
        url: "/images/gallery/img-05.jpg",
        title: "Image 2",
        description: "This is the second image"
    },
    {
        id: 6,
        url: "/images/gallery/img-06.jpg",
        title: "Image 3",
        description: "This is the third image"
    },
    {
        id: 7,
        url: "/images/gallery/img-07.jpg",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        id: 8,
        url: "/images/gallery/img-08.jpg",
        title: "Image 2",
        description: "This is the second image"
    }
];
function Gallery2({ helperCls  }) {
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
            id: "gallery-2",
            className: `gallery-section division ${helperCls ? helperCls : ""}`,
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
                                            children: "Image Gallery"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "p-xl",
                                            children: "Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-sm-6 col-lg-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gallery-img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "image-link",
                                                onClick: ()=>openLightbox(index),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hover-overlay",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "img-fluid",
                                                            src: image.url,
                                                            alt: "gallery-image"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "item-overlay"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "img-meta white-color",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "h5-xs",
                                                                    children: "Classic California"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "txt-block-rating",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "stars-rating",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "4.5"
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
                                                                                className: "fas fa-star"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star-half-alt"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "(23)"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })),
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
                        " "
                    ]
                }),
                "    "
            ]
        })
    });
}


/***/ })

};
;