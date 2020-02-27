(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    {
        path: 'movies',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/movies/movies.module */ "./src/app/app-shell/movies/movies.module.ts")).then(function (mod) { return mod.MoviesModule; });
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  background-color: #1d1d1d;\r\n  padding-top: 2rem;\r\n  padding-bottom: 4rem;\r\n}\r\n  \r\n.title {\r\n  color: #fff;\r\n}\r\n  \r\n.description {\r\n  color: #fff;\r\n}\r\n  \r\n.footerlink,\r\n.footerlink:hover {\r\n  color: #fff;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb290ZXJsaW5rLFxyXG4uZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-around\">\r\n      <div class=\"col-8 col-md-5\">\r\n        <h5 class=\"title\">Best Movies</h5>\r\n        <p class=\"description\">\r\n          Your home of great movies for less prices. Chill and get served with hot content\r\n        </p>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a class=\"footerlink\" href=\"/\">\r\n              Movies\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footerlink\" href=\"/\">\r\n              About\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a class=\"footerlink\" href=\"/\">\r\n              Contact\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/app-shell/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/app-shell/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/movie-detail/movie-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/app-shell/movies/movie-detail/movie-detail.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tb3ZpZXMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-shell/movies/movie-detail/movie-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/app-shell/movies/movie-detail/movie-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"jumbotron\">\n    <div class=\"container text-muted\">\n      <h2>{{ movie?.title }}</h2>\n    </div>\n  </div>\n  <div class=\"container py-5\">\n    <div class=\"row heading\">\n      <div class=\"col-6\">\n        <img [src]=\"movie?.imageUrlLarge\" [alt]=\"movie?.title\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 mt-3\">\n        <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb bg-white mb-0\">\n            <li class=\"breadcrumb-item\">\n              <a class=\"breadCrumbLink\" [routerLink]=\"['/movies']\">\n                Movies\n              </a>\n            </li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\n              {{ movie?.slug }}\n            </li>\n          </ol>\n        </nav>\n      </div>\n      <div class=\"col-md-8 col-12 ml-3 mb-5\">\n        <p class=\"text-capitalize text-secondary\">\n          <strong>Movie title:</strong> {{ movie?.title }}\n        </p>\n        <p class=\"title text-secondary\">\n          <strong>Released Date:</strong> {{ movie?.date }} <br />\n          <strong>Runtime:</strong> {{ movie?.runtime }} <br />\n          <strong>Genre:</strong> {{ movie?.genre }} <br /><strong>Language:</strong>\n          {{ movie?.language }} <br />\n          <strong>Country:</strong> {{ movie?.country }}\n        </p>\n        <p class=\"title text-secondary\">\n          Rated:\n          <i class=\"material-icons\" *ngFor=\"let a of rating\">star</i>\n          <i class=\"material-icons\">starhalf</i> -->\n        </p>\n        <p class=\"description\">\n          <strong>Description:</strong> {{ movie?.short_description }}\n        </p>\n        <p class=\"plot\"><strong>Plot:</strong> {{ movie?.plot }}</p>\n\n        <p class=\"plot\"><strong>Director:</strong> {{ movie?.director }}</p>\n        <p class=\"plot\"><strong>Writer:</strong> {{ movie?.writer }}</p>\n        <p class=\"plot\">\n          <strong>Actors:</strong> {{ movie?.actors.join(', ') }}\n        </p>\n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/app-shell/movies/movie-detail/movie-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/app-shell/movies/movie-detail/movie-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies.service */ "./src/app/app-shell/movies/movies.service.ts");




var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, mvService) {
        this.route = route;
        this.mvService = mvService;
        this.title = 'Movie detail';
        this.slug = this.route.snapshot.paramMap.get('slug');
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        this.movie = this.mvService.getOneMovie(this.slug);
        this.rating = Array(this.movie.rated);
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/app-shell/movies/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/app-shell/movies/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/app-shell/movies/movies-favorite/movies-favorite.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tb3ZpZXMvbW92aWVzLWZhdm9yaXRlL21vdmllcy1mYXZvcml0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/app-shell/movies/movies-favorite/movies-favorite.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"mainContent\">\n  <div class=\"jumbotron\">\n    <div class=\"container text-muted\">\n      <h2>Your Favorite movies</h2>\n    </div>\n  </div>\n  \n  <div class=\"container py-3\">\n    <div class=\"col-12\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb bg-white mb-0\">\n          <li class=\"breadcrumb-item\">\n            <a class=\"breadCrumbLink\" [routerLink]=\"['/movies']\">\n              Movies\n            </a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">\n            favorites\n          </li>\n        </ol>\n      </nav>\n    </div>\n    <div class=\"row py-5\">\n      <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mb-4\" *ngFor=\"let movie of favoriteMovies\">\n        <div class=\"card\">\n          <img [src]=\"movie.imageUrl\" class=\"card-img-top\" alt=\"placeholder image\" />\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ movie.title }}</h5>\n            <h6 class=\"card-subtitle text-muted my-2\">\n              Release year: {{ movie.date }}\n            </h6>\n            <p class=\"card-text py-3\">\n              {{ movie.short_description }}\n            </p>\n            <a (click)=\"toggleVote(movie)\" [class.text-danger]='movieInFavorites(movie)'>\n              <i class=\"material-icons\">favorite</i> \n            </a>\n            <a [routerLink]=\"['/movies', movie.slug]\" class=\"card-link  float-right\">see more</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p *ngIf=\"favoriteMovies.length === 0\" class=\"text-center py-3 text-info\">You have not selected any movie as your favorite</p>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/app-shell/movies/movies-favorite/movies-favorite.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MoviesFavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesFavoriteComponent", function() { return MoviesFavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/app-shell/movies/movies.service.ts");



var MoviesFavoriteComponent = /** @class */ (function () {
    function MoviesFavoriteComponent(mvService) {
        this.mvService = mvService;
        this.title = 'favorite movies';
        this.favoriteMovies = [];
    }
    MoviesFavoriteComponent.prototype.ngOnInit = function () {
        this.favoriteMovies = this.mvService.getFavorites();
    };
    MoviesFavoriteComponent.prototype.movieInFavorites = function (movie) {
        return this.mvService.movieInFavorites(movie);
    };
    MoviesFavoriteComponent.prototype.toggleVote = function (movie) {
        this.mvService.toggleFavorites(movie);
    };
    MoviesFavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-favorite',
            template: __webpack_require__(/*! ./movies-favorite.component.html */ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.html"),
            styles: [__webpack_require__(/*! ./movies-favorite.component.css */ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], MoviesFavoriteComponent);
    return MoviesFavoriteComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/movies-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/app-shell/movies/movies-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.component */ "./src/app/app-shell/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/app-shell/movies/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movies_favorite_movies_favorite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-favorite/movies-favorite.component */ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.ts");






var routes = [
    {
        path: '',
        component: _movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]
    },
    {
        path: 'movies/favorites',
        component: _movies_favorite_movies_favorite_component__WEBPACK_IMPORTED_MODULE_5__["MoviesFavoriteComponent"]
    },
    {
        path: 'movies/:slug',
        component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailComponent"]
    }
];
var MoviesRoutingModule = /** @class */ (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/movies.component.css":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/movies/movies.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app-shell/movies/movies.component.html":
/*!********************************************************!*\
  !*** ./src/app/app-shell/movies/movies.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"mainContent\">\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container text-muted\">\r\n      <h2>Welcome to best movies</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"container py-5\">\r\n    <div class=\"row mb-3\">\r\n      <!-- <div class=\"col\"><h2>List of movies</h2></div> -->\r\n      <div class=\"col-12 col-md-4 my-2\">\r\n        <div>\r\n          <label for=\"titlefilter\">Filter by title</label>\r\n          <input [(ngModel)]=\"listFilter\" type=\"text\" class=\"form-control\"\r\n            placeholder=\"search for a movie via its title\" id=\"titlefilter\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-4 my-2\">\r\n        <div>\r\n          <label for=\"sortby\">Sort by year and rating</label>\r\n          <select name=\"sortby\" class=\"form-control\" id=\"sortby\" [(ngModel)]=\"sortBy\">\r\n            <option value=\"\" [disabled]=\"true\">Sort movies by</option>\r\n            <option value=\"year_asc\">Year - ascending</option>\r\n            <option value=\"year_desc\">Year - descending</option>\r\n            <option value=\"rating_asc\">rating - lowest to highest</option>\r\n            <option value=\"rating_desc\">rating - highest to lowest</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-4 my-2\">\r\n        <div>\r\n          <label for=\"sortbyactors\">Sort by actor</label>\r\n          <select name=\"sortbyactors\" class=\"form-control\" id=\"sortbyactors\" [(ngModel)]=\"sortByActor\">\r\n            <option value=\"\" selected aria-selected=\"true\" [disabled]=\"true\">Filter movies by actors</option>\r\n            <option value=\"{{ actor }}\" *ngFor=\"let actor of actors\" aria-selected=\"false\">{{ actor }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row py-3\">\r\n      <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mb-4\" *ngFor=\"let movie of filteredMovies\">\r\n        <div class=\"card\">\r\n          <img [src]=\"movie.imageUrl\" class=\"card-img-top\" alt=\"placeholder image\" />\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-capitalize\"><a [routerLink]=\"['/movies', movie.slug]\">{{ \r\n              movie.title.length > 20 ?\r\n              movie.title.substring(0, 20) + '...' : movie.title\r\n            }}</a>\r\n            </h5>\r\n            <h6 class=\"card-subtitle text-muted my-2\">\r\n              Release year: {{ movie.date.toDateString() }}\r\n            </h6>\r\n            <p class=\"card-text py-3\">\r\n              {{ movie.short_description }}\r\n            </p>\r\n            <p>rated: {{ movie.rated }} stars</p>\r\n            <a (click)=\"toggleVote(movie)\" [class.text-danger]=\"movieInFavorites(movie)\" title=\"Add to favorites\">\r\n              <i class=\"material-icons\">favorite</i>\r\n            </a>\r\n            <a [routerLink]=\"['/movies', movie.slug]\" class=\"card-link float-right\" title=\"See more details \">More\r\n              details</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/app-shell/movies/movies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-shell/movies/movies.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.service */ "./src/app/app-shell/movies/movies.service.ts");
/* harmony import */ var _sort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort.service */ "./src/app/app-shell/movies/sort.service.ts");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(mvService, stService) {
        this.mvService = mvService;
        this.stService = stService;
        this.title = 'movies';
        this.favoriteMovies = [];
    }
    Object.defineProperty(MoviesComponent.prototype, "sortBy", {
        get: function () {
            return this._sortBy;
        },
        set: function (value) {
            this._sortBy = value;
            this.filteredMovies = value
                ? this.stService.performSort(value, this.filteredMovies)
                : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoviesComponent.prototype, "sortByActor", {
        get: function () {
            return this._actor;
        },
        set: function (value) {
            this._actor = value;
            this.filteredMovies = value
                ? this.stService.actorsSort(value, this.filteredMovies)
                : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoviesComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredMovies = value
                ? this.stService.performFilter(value, this.movies)
                : this.movies;
        },
        enumerable: true,
        configurable: true
    });
    MoviesComponent.prototype.ngOnInit = function () {
        this.movies = this.filteredMovies = this.mvService.getAllMovies();
        this.favoriteMovies = this.mvService.getFavorites();
        this.actors = this.mvService.actors;
    };
    MoviesComponent.prototype.toggleVote = function (movie) {
        this.mvService.toggleFavorites(movie);
    };
    MoviesComponent.prototype.movieInFavorites = function (movie) {
        return this.mvService.movieInFavorites(movie);
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/app-shell/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/app-shell/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"],
            _sort_service__WEBPACK_IMPORTED_MODULE_3__["FilterSortService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/movies.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-shell/movies/movies.module.ts ***!
  \***************************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.component */ "./src/app/app-shell/movies/movies.component.ts");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/app-shell/movies/movies-routing.module.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/app-shell/movies/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movies_favorite_movies_favorite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies-favorite/movies-favorite.component */ "./src/app/app-shell/movies/movies-favorite/movies-favorite.component.ts");







;

var MoviesModule = /** @class */ (function () {
    function MoviesModule() {
    }
    MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"], _movies_favorite_movies_favorite_component__WEBPACK_IMPORTED_MODULE_7__["MoviesFavoriteComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesRoutingModule"]]
        })
    ], MoviesModule);
    return MoviesModule;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/movies.service.ts":
/*!****************************************************!*\
  !*** ./src/app/app-shell/movies/movies.service.ts ***!
  \****************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sampleData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sampleData */ "./src/app/app-shell/movies/sampleData.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { environment } from '../../../environments/environment';


// environment
var store = localStorage;
var MoviesService = /** @class */ (function () {
    function MoviesService(toastr) {
        this.toastr = toastr;
        this.title = 'movies';
        this.movies = Object(_sampleData__WEBPACK_IMPORTED_MODULE_3__["default"])();
        this.moviesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint.movies;
        this.favoriteMovies = [];
        this.actors = Object(_sampleData__WEBPACK_IMPORTED_MODULE_3__["getActors"])();
        this.favSubjects$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.favoriteMovies);
        this.favSubjectsChanged$ = this.favSubjects$.asObservable();
        this.favoriteMovies =
            this.getFavoritesFromSession() !== null
                ? this.getFavoritesFromSession()
                : [];
        this.favSubjects$.next(this.favoriteMovies);
    }
    MoviesService.prototype.getAllMovies = function () {
        return this.movies;
    };
    MoviesService.prototype.getOneMovie = function (slug) {
        return this.movies.filter(function (mv) { return mv.slug === slug; })[0];
    };
    MoviesService.prototype.addToFavorites = function (movie) {
        this.favoriteMovies.push(movie);
        this.addToSession();
        this.favSubjects$.next(this.favoriteMovies);
        this.toastr.success('Movie added', "You added \"" + movie.title + "\" to favorites");
    };
    MoviesService.prototype.removeFromFavorites = function (movie) {
        var i = this.favoriteMovies.findIndex(function (m) { return m.title === movie.title; });
        if (i !== -1) {
            this.favoriteMovies.splice(i, 1);
            this.addToSession();
        }
        this.favSubjects$.next(this.favoriteMovies);
        this.toastr.warning('Movie removed', "You removed \"" + movie.title + "\" from favorites");
    };
    MoviesService.prototype.addToSession = function () {
        store.setItem(this.title, JSON.stringify(this.favoriteMovies));
    };
    MoviesService.prototype.movieInFavorites = function (movie) {
        var m = this.favoriteMovies &&
            this.favoriteMovies.filter(function (mv) { return mv.title === movie.title; });
        return m.length !== 0;
    };
    MoviesService.prototype.toggleFavorites = function (movie) {
        var movieExists = this.movieInFavorites(movie);
        if (movieExists) {
            this.removeFromFavorites(movie);
        }
        else {
            this.addToFavorites(movie);
        }
    };
    MoviesService.prototype.getFavoritesFromSession = function () {
        var movies = store.getItem(this.title);
        if (movies !== null) {
            return JSON.parse(movies);
        }
        else {
            return null;
        }
    };
    MoviesService.prototype.getFavorites = function () {
        return this.favoriteMovies;
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/app-shell/movies/sampleData.ts":
/*!************************************************!*\
  !*** ./src/app/app-shell/movies/sampleData.ts ***!
  \************************************************/
/*! exports provided: getActors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActors", function() { return getActors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMovies; });
var shortLoremIpsum = "Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore \nnon eiusmod Lorem tempor nisi cillum.";
var longLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus\n  non enim praesent elementum facilisis leo vel. Risus at ultrices mi\n  tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non\n  tellus. Convallis convallis tellus id interdum velit laoreet id donec\n  ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl\n  suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod\n  quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet\n  proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras\n  tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum\n  varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.\n  Lorem donec massa sapien faucibus et molestie ac.";
var actorsList = [
    'John Doe',
    'Jane Doe',
    'Samuel Doe',
    'Jiminy Doe',
    'Peter Griffin',
    'Lois Griffin',
    'Stewie Griffin',
    'Brian Griffin'
];
function getActors() {
    return actorsList;
}
function names(nm) {
    return actorsList.filter(function (name) { return name.toLocaleLowerCase().includes(nm); });
}
var Movies = [
    {
        title: 'First man on the Moon',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2017, 6, 11),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 3,
        runtime: '1:30',
        genre: 'horror',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: names('doe'),
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['best movie of the year 2019']
    },
    {
        title: 'Days of roses',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2018, 6, 15),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 5,
        runtime: '1:30',
        genre: 'romance',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: ['Jessica Alba', 'Tom cruise'],
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['Novel peace price 2014']
    },
    {
        title: 'The first guy on the planet',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2017, 6, 13),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 5,
        runtime: '1:30',
        genre: 'triller',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: names('griffin'),
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['best movie of the year 2015']
    },
    {
        title: 'Why we were fictional boys',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2015, 6, 11),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 5,
        runtime: '1:30',
        genre: 'dance',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: names('doe'),
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['best movie of the year 2016']
    },
    {
        title: 'Developers do not sleep',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2017, 6, 11),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 4,
        runtime: '1:30',
        genre: 'horror',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: names('doe'),
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['best movie of the year 2016']
    },
    {
        title: 'The devils anus',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2017, 3, 15),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 5,
        runtime: '1:30',
        genre: 'drama',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: ['Jessica Alba', 'Tom cruise'],
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['best movie of the year 2016']
    },
    {
        title: 'the devils triangle',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2017, 6, 11),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 5,
        runtime: '1:30',
        genre: 'drama',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: names('griffin'),
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan',
        awards: ['best movie of the year 2017']
    },
    {
        title: 'Nine lives',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2013, 6, 11),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 2,
        runtime: '1:30',
        genre: 'horror',
        director: 'Best director ever',
        writer: 'Somebody from the moon',
        actors: names('griffin'),
        plot: longLoremIpsum,
        language: 'Taiwanese',
        country: 'Taiwan'
    },
    {
        title: 'Beholded',
        imageUrl: 'https://via.placeholder.com/300',
        date: new Date(2020, 6, 11),
        short_description: shortLoremIpsum,
        description: longLoremIpsum,
        rated: 5,
        runtime: '1:30',
        genre: 'comedy',
        director: 'Best director ever',
        writer: 'Wicked author',
        actors: ['Peter Griffin'],
        plot: longLoremIpsum,
        language: 'English',
        country: 'Nigeria'
    }
];
Movies.forEach(function (o) {
    o.slug = o.title
        .toLocaleLowerCase()
        .split(' ')
        .join('-');
    o.imageUrlLarge = o.imageUrl.replace('300', '700x300');
    o.released = o.date;
});
function getMovies() {
    return Movies;
}


/***/ }),

/***/ "./src/app/app-shell/movies/sort.service.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/movies/sort.service.ts ***!
  \**************************************************/
/*! exports provided: FilterSortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSortService", function() { return FilterSortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterSortService = /** @class */ (function () {
    function FilterSortService() {
    }
    FilterSortService.prototype.performSort = function (value, arr) {
        // tslint:disable-next-line: no-unused-expression
        if (value.startsWith('year')) {
            return this.sortYear(value, arr);
        }
        if (value.startsWith('rating')) {
            return this.sortRating(value, arr);
        }
        return arr;
    };
    FilterSortService.prototype.sortRating = function (value, arr) {
        return arr.sort(function (a, b) {
            if (value.endsWith('asc')) {
                return a.rated - b.rated;
            }
            return b.rated - a.rated;
        });
    };
    FilterSortService.prototype.sortYear = function (value, arr) {
        return arr.sort(function (a, b) {
            if (value.endsWith('asc')) {
                return a.date.getTime() - b.date.getTime();
            }
            return b.date.getTime() - a.date.getTime();
        });
    };
    FilterSortService.prototype.performFilter = function (filterBy, movies) {
        filterBy = filterBy.toLocaleLowerCase();
        return movies.filter(function (movie) {
            return movie.title.toLocaleLowerCase().includes(filterBy);
        });
    };
    FilterSortService.prototype.actorsSort = function (actor, movies) {
        return movies.filter(function (movie) { return movie.actors.includes(actor); });
    };
    FilterSortService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FilterSortService);
    return FilterSortService;
}());



/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skipLink a {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: -100px;\r\n}\r\n\r\n.skipLink a:focus {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  background: #000000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpcExpbmsgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMDBweDtcclxuICB0b3A6IC0xMDBweDtcclxufVxyXG5cclxuLnNraXBMaW5rIGE6Zm9jdXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skipLink\">\r\n  <a [href]=\"skipLinkPath\">Skip to Main Content</a>\r\n</div>\r\n<nav class=\"navbar navbar-expand-sm navbar-light border-bottom justify-content-between\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    Best Movies\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse justify-content-center\" id=\"navbarSupportedContent\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        Home\r\n      </a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"/movies/favorites\" routerLinkActive=\"active\">\r\n        Favorites\r\n        <span class=\"badge badge-pill badge-primary\">{{ moviesLength }}</span>\r\n      </a>\r\n      <!-- <a class=\"nav-item nav-link active\" routerLink=\"/list\">\r\n      Contact\r\n    </a> -->\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movies_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies/movies.service */ "./src/app/app-shell/movies/movies.service.ts");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(location, mvS) {
        this.location = location;
        this.mvS = mvS;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skipLinkPath = this.location.path() + "#mainContent";
        this.mvS.favSubjectsChanged$.subscribe(function (data) { return _this.moviesLength = data.length; });
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/app-shell/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/app-shell/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _movies_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n  \r\n  footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 160px; /* Set the fixed height of the footer here */\r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  /* Override Bootstrap Styling */\r\n  \r\n  .btn-primary {\r\n    background-color: #025fce !important;\r\n  }\r\n  \r\n  button:focus,\r\n  button:active {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYSxFQUFFLDRDQUE0QztJQUMzRCx5QkFBeUI7RUFDM0I7O0VBRUEsK0JBQStCOztFQUUvQjtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7IC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLyogT3ZlcnJpZGUgQm9vdHN0cmFwIFN0eWxpbmcgKi9cclxuICBcclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNWZjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBidXR0b246Zm9jdXMsXHJcbiAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!-- header -->\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- footer -->\r\n<app-footer></app-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webTemplateAppAngularNode';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_shell_movies_movies_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell/movies/movies.module */ "./src/app/app-shell/movies/movies.module.ts");
/* harmony import */ var _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-shell/nav-bar/nav-bar.component */ "./src/app/app-shell/nav-bar/nav-bar.component.ts");
/* harmony import */ var _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-shell/footer/footer.component */ "./src/app/app-shell/footer/footer.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _app_shell_movies_movies_module__WEBPACK_IMPORTED_MODULE_7__["MoviesModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoint: {
        movies: '/api/movies'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maqui\Desktop\statogale\projects\frontend\webTemplateAppAngularNode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map