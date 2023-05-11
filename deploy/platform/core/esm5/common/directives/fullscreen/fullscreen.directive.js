/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * @record
 */
function IFsDocument() { }
if (false) {
    /** @type {?} */
    IFsDocument.prototype.fullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.mozFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.msFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitExitFullscreen;
    /** @type {?} */
    IFsDocument.prototype.mozCancelFullScreen;
    /** @type {?} */
    IFsDocument.prototype.msExitFullscreen;
}
var TdFullscreenDirective = /** @class */ (function () {
    function TdFullscreenDirective(_document, _el) {
        this._document = _document;
        this._el = _el;
        this.fullScreenIsActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TdFullscreenDirective.prototype.fsChangeHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.enterFullScreen = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var nativeElement = this._el.nativeElement;
        /** @type {?} */
        var enterFullScreenMap = {
            requestFullscreen: (/**
             * @return {?}
             */
            function () { return nativeElement.requestFullscreen(); }),
            // Chrome
            webkitRequestFullscreen: (/**
             * @return {?}
             */
            function () { return nativeElement.webkitRequestFullscreen(); }),
            // Safari
            mozRequestFullScreen: (/**
             * @return {?}
             */
            function () { return nativeElement.mozRequestFullScreen(); }),
            // Firefox
            msRequestFullscreen: (/**
             * @return {?}
             */
            function () { return nativeElement.msRequestFullscreen(); }), // IE
        };
        try {
            for (var _b = __values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                if (nativeElement[handler]) {
                    enterFullScreenMap[handler]();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.exitFullScreen = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
        /** @type {?} */
        var exitFullScreenMap = {
            exitFullscreen: (/**
             * @return {?}
             */
            function () { return _document.exitFullscreen(); }),
            // Chrome
            webkitExitFullscreen: (/**
             * @return {?}
             */
            function () { return _document.webkitExitFullscreen(); }),
            // Safari
            mozCancelFullScreen: (/**
             * @return {?}
             */
            function () { return _document.mozCancelFullScreen(); }),
            // Firefox
            msExitFullscreen: (/**
             * @return {?}
             */
            function () { return _document.msExitFullscreen(); }), // IE
        };
        try {
            for (var _c = __values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var handler = _d.value;
                if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                    exitFullScreenMap[handler]();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    TdFullscreenDirective.prototype._getFullScreenElement = /**
     * @private
     * @return {?}
     */
    function () {
        var e_3, _a;
        var _document = this._document;
        /** @type {?} */
        var tdFullScreenElementMap = {
            fullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.fullscreenElement; }),
            // Chrome, Opera
            webkitFullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.webkitFullscreenElement; }),
            // Safari
            mozFullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.mozFullscreenElement; }),
            // Firefox
            msFullscreenElement: (/**
             * @return {?}
             */
            function () { return _document.msFullscreenElement; }), // IE, Edge
        };
        try {
            for (var _b = __values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var props = _c.value;
                if (_document[props]) {
                    return _document[props];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    TdFullscreenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFullScreen]',
                    exportAs: 'tdFullScreen',
                },] }
    ];
    /** @nocollapse */
    TdFullscreenDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef }
    ]; };
    TdFullscreenDirective.propDecorators = {
        fsChangeHandler: [{ type: HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
    };
    return TdFullscreenDirective;
}());
export { TdFullscreenDirective };
if (false) {
    /** @type {?} */
    TdFullscreenDirective.prototype.fullScreenIsActive;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9jb21tb24vIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUzQywwQkFRQzs7O0lBUEMsd0NBQTJCOztJQUMzQiw4Q0FBaUM7O0lBQ2pDLDJDQUE4Qjs7SUFDOUIsMENBQTZCOztJQUM3QiwyQ0FBaUM7O0lBQ2pDLDBDQUFnQzs7SUFDaEMsdUNBQTZCOztBQUcvQjtJQU1FLCtCQUFzQyxTQUFzQixFQUFVLEdBQWU7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFEckYsdUJBQWtCLEdBQVksS0FBSyxDQUFDO0lBQ29ELENBQUM7Ozs7O0lBTWxGLCtDQUFlOzs7O0lBSnRCLFVBSXVCLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdEQUFnQjs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNHLENBQUM7Ozs7SUFFTSwrQ0FBZTs7O0lBQXRCOztRQUVXLElBQUEsYUFBYSxHQUNLLElBQUksa0JBRFQ7O1lBRWhCLGtCQUFrQixHQUFXO1lBQ2pDLGlCQUFp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RUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUNwRCxZQUFZLFNBQUMsaUNBQWlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDMUQsWUFBWSxTQUFDLDhCQUE4QixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3ZELFlBQVksU0FBQyw2QkFBNkIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE0RHpELDRCQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0FuRVkscUJBQXFCOzs7SUFDaEMsbURBQW9DOzs7OztJQUN4QiwwQ0FBZ0Q7Ozs7O0lBQUUsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbnRlcmZhY2UgSUZzRG9jdW1lbnQgZXh0ZW5kcyBIVE1MRG9jdW1lbnQge1xuICBmdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG1vekZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtc0Z1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRnVsbFNjcmVlbl0nLFxuICBleHBvcnRBczogJ3RkRnVsbFNjcmVlbicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSB7XG4gIGZ1bGxTY3JlZW5Jc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogSUZzRG9jdW1lbnQsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW96ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1zZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBmc0NoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mdWxsU2NyZWVuSXNBY3RpdmUgPSBldmVudC5zcmNFbGVtZW50ID09PSB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCA/IHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6IHRoaXMuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgZW50ZXJGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIF9lbDogeyBuYXRpdmVFbGVtZW50IH0sXG4gICAgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCBlbnRlckZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gU2FmYXJpXG4gICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpLCAvLyBGaXJlZm94XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGVudGVyRnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChuYXRpdmVFbGVtZW50W2hhbmRsZXJdKSB7XG4gICAgICAgIGVudGVyRnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleGl0RnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBfZG9jdW1lbnQsXG4gICAgICBfZWw6IHsgbmF0aXZlRWxlbWVudCB9LFxuICAgIH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgZXhpdEZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIGV4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKSwgLy8gQ2hyb21lXG4gICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCksIC8vIFNhZmFyaVxuICAgICAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gX2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKSwgLy8gRmlyZWZveFxuICAgICAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGV4aXRGdWxsU2NyZWVuTWFwKSkge1xuICAgICAgaWYgKF9kb2N1bWVudFtoYW5kbGVyXSAmJiB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpID09PSBuYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGV4aXRGdWxsU2NyZWVuTWFwW2hhbmRsZXJdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgY29uc3QgeyBfZG9jdW1lbnQgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCB0ZEZ1bGxTY3JlZW5FbGVtZW50TWFwOiBvYmplY3QgPSB7XG4gICAgICBmdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50LCAvLyBDaHJvbWUsIE9wZXJhXG4gICAgICB3ZWJraXRGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50LCAvLyBTYWZhcmlcbiAgICAgIG1vekZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQubW96RnVsbHNjcmVlbkVsZW1lbnQsIC8vIEZpcmVmb3hcbiAgICAgIG1zRnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50LCAvLyBJRSwgRWRnZVxuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wcyBvZiBPYmplY3Qua2V5cyh0ZEZ1bGxTY3JlZW5FbGVtZW50TWFwKSkge1xuICAgICAgaWYgKF9kb2N1bWVudFtwcm9wc10pIHtcbiAgICAgICAgcmV0dXJuIF9kb2N1bWVudFtwcm9wc107XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=