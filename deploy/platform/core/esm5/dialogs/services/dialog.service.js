/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spreadArray } from "tslib";
import { Injectable, Inject, RendererFactory2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function IDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    IDialogConfig.prototype.title;
    /** @type {?} */
    IDialogConfig.prototype.message;
}
/**
 * @record
 */
export function IAlertConfig() { }
if (false) {
    /** @type {?|undefined} */
    IAlertConfig.prototype.closeButton;
}
/**
 * @record
 */
export function IConfirmConfig() { }
if (false) {
    /** @type {?|undefined} */
    IConfirmConfig.prototype.acceptButton;
    /** @type {?|undefined} */
    IConfirmConfig.prototype.cancelButton;
}
/**
 * @record
 */
export function IPromptConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPromptConfig.prototype.value;
}
/**
 * @record
 * @template T
 */
export function IDraggableConfig() { }
if (false) {
    /** @type {?} */
    IDraggableConfig.prototype.component;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.config;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.dragHandleSelectors;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.draggableClass;
}
/**
 * @record
 * @template T
 */
export function IDraggableRefs() { }
if (false) {
    /** @type {?} */
    IDraggableRefs.prototype.matDialogRef;
    /** @type {?} */
    IDraggableRefs.prototype.dragRefSubject;
}
var TdDialogService = /** @class */ (function () {
    function TdDialogService(_document, _dialogService, _dragDrop, rendererFactory) {
        this._document = _document;
        this._dialogService = _dialogService;
        this._dragDrop = _dragDrop;
        this.rendererFactory = rendererFactory;
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     */
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    TdDialogService.prototype.open = /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     */
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    TdDialogService.prototype.closeAll = /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    function () {
        this._dialogService.closeAll();
    };
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     */
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openAlert = /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        /** @type {?} */
        var alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     */
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openConfirm = /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        /** @type {?} */
        var confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     */
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openPrompt = /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = this._createConfig(config);
        /** @type {?} */
        var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        /** @type {?} */
        var promptDialogComponent = dialogRef.componentInstance;
        promptDialogComponent.title = config.title;
        promptDialogComponent.message = config.message;
        promptDialogComponent.value = config.value;
        if (config.acceptButton) {
            promptDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            promptDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    };
    /**
     * Opens a draggable dialog containing the given component.
     */
    /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    TdDialogService.prototype.openDraggable = /**
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var component = _a.component, config = _a.config, dragHandleSelectors = _a.dragHandleSelectors, draggableClass = _a.draggableClass;
        /** @type {?} */
        var matDialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        var dragRefSubject = new Subject();
        /** @type {?} */
        var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        matDialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dialogElement = (/** @type {?} */ (_this._document.getElementById(matDialogRef.id)));
            /** @type {?} */
            var draggableElement = _this._dragDrop.createDrag(dialogElement);
            if (draggableClass) {
                /** @type {?} */
                var childComponent = dialogElement.firstElementChild;
                _this._renderer2.addClass(childComponent, draggableClass);
            }
            if (dragHandleSelectors && dragHandleSelectors.length) {
                /** @type {?} */
                var dragHandles = dragHandleSelectors.reduce((/**
                 * @param {?} acc
                 * @param {?} curr
                 * @return {?}
                 */
                function (acc, curr) { return __spreadArray(__spreadArray([], __read(acc)), __read(Array.from(dialogElement.querySelectorAll(curr)))); }), []);
                if (dragHandles.length > 0) {
                    draggableElement.withHandles((/** @type {?} */ (dragHandles)));
                }
            }
            /** @type {?} */
            var rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
            if (rootElement) {
                draggableElement.withRootElement((/** @type {?} */ (rootElement)));
            }
            /** @type {?} */
            var boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
            if (boundaryElement) {
                draggableElement.withBoundaryElement((/** @type {?} */ (boundaryElement)));
            }
            dragRefSubject.next(draggableElement);
        }));
        return { matDialogRef: matDialogRef, dragRefSubject: dragRefSubject };
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype._createConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    };
    TdDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdDialogService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: MatDialog },
        { type: DragDrop },
        { type: RendererFactory2 }
    ]; };
    return TdDialogService;
}());
export { TdDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dialogService;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dragDrop;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFnQixlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0IsbUNBR0M7OztJQUZDLDhCQUFlOztJQUNmLGdDQUFnQjs7Ozs7QUFHbEIsa0NBRUM7OztJQURDLG1DQUFxQjs7Ozs7QUFHdkIsb0NBR0M7OztJQUZDLHNDQUFzQjs7SUFDdEIsc0NBQXNCOzs7OztBQUd4QixtQ0FFQzs7O0lBREMsOEJBQWU7Ozs7OztBQUdqQixzQ0FPQzs7O0lBTkMscUNBQTRCOztJQUM1QixrQ0FBeUI7O0lBRXpCLCtDQUErQjs7SUFFL0IsMENBQXdCOzs7Ozs7QUFHMUIsb0NBR0M7OztJQUZDLHNDQUE4Qjs7SUFDOUIsd0NBQWlDOztBQUduQztJQUlFLHlCQUM0QixTQUFjLEVBQ2hDLGNBQXlCLEVBQ3pCLFNBQW1CLEVBQ25CLGVBQWlDO1FBSGYsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV6QyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7OztJQUNJLDhCQUFJOzs7Ozs7Ozs7OztJQUFYLFVBQWUsU0FBMkIsRUFBRSxNQUF3QjtRQUNsRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSxrQ0FBUTs7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHOzs7Ozs7Ozs7Ozs7Ozs7SUFDSSxtQ0FBUzs7Ozs7Ozs7Ozs7Ozs7SUFBaEIsVUFBaUIsTUFBb0I7O1lBQzdCLFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQzFELFNBQVMsR0FBeUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzlFLHNCQUFzQixFQUN0QixZQUFZLENBQ2I7O1lBQ0ssb0JBQW9CLEdBQTJCLFNBQVMsQ0FBQyxpQkFBaUI7UUFDaEYsb0JBQW9CLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUMsb0JBQW9CLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3RCLG9CQUFvQixDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRzs7Ozs7Ozs7Ozs7Ozs7OztJQUNJLHFDQUFXOzs7Ozs7Ozs7Ozs7Ozs7SUFBbEIsVUFBbUIsTUFBc0I7O1lBQ2pDLFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQzFELFNBQVMsR0FBMkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2hGLHdCQUF3QixFQUN4QixZQUFZLENBQ2I7O1lBQ0ssc0JBQXNCLEdBQTZCLFNBQVMsQ0FBQyxpQkFBaUI7UUFDcEYsc0JBQXNCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDNUMsc0JBQXNCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHNCQUFzQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHNCQUFzQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0ksb0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBakIsVUFBa0IsTUFBcUI7O1lBQy9CLFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQzFELFNBQVMsR0FBMEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQy9FLHVCQUF1QixFQUN2QixZQUFZLENBQ2I7O1lBQ0sscUJBQXFCLEdBQTRCLFNBQVMsQ0FBQyxpQkFBaUI7UUFDbEYscUJBQXFCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MscUJBQXFCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0MscUJBQXFCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHFCQUFxQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHFCQUFxQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0ksdUNBQWE7Ozs7OztJQUFwQixVQUF3QixFQUtGO1FBTHRCLGlCQTJDQztZQTFDQyxTQUFTLGVBQUEsRUFDVCxNQUFNLFlBQUEsRUFDTixtQkFBbUIseUJBQUEsRUFDbkIsY0FBYyxvQkFBQTs7WUFFUixZQUFZLEdBQXlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7O1lBRWhGLGNBQWMsR0FBcUIsSUFBSSxPQUFPLEVBQVc7O1lBRXpELHlCQUF5QixHQUFXLG1CQUFtQjs7WUFDdkQsOEJBQThCLEdBQVcsd0JBQXdCO1FBRXZFLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQzs7Z0JBQzdCLGFBQWEsR0FBZ0IsbUJBQWEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztnQkFDeEYsZ0JBQWdCLEdBQVksS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBRTFFLElBQUksY0FBYyxFQUFFOztvQkFDWixjQUFjLEdBQVksYUFBYSxDQUFDLGlCQUFpQjtnQkFDL0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxtQkFBbUIsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7O29CQUMvQyxXQUFXLEdBQWMsbUJBQW1CLENBQUMsTUFBTTs7Ozs7Z0JBQ3ZELFVBQUMsR0FBYyxFQUFFLElBQVksSUFBSyw4Q0FBSSxHQUFHLFdBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBNUQsQ0FBNkQsR0FDL0YsRUFBRSxDQUNIO2dCQUNELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzFCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxtQkFBZSxXQUFXLEVBQUEsQ0FBQyxDQUFDO2lCQUMxRDthQUNGOztnQkFDSyxXQUFXLEdBQVksYUFBYSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUM3RSxJQUFJLFdBQVcsRUFBRTtnQkFDZixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQzthQUM1RDs7Z0JBRUssZUFBZSxHQUFZLGFBQWEsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDdEYsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFhLGVBQWUsRUFBQSxDQUFDLENBQUM7YUFDcEU7WUFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsWUFBWSxjQUFBLEVBQUUsY0FBYyxnQkFBQSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sdUNBQWE7Ozs7O0lBQXJCLFVBQXNCLE1BQXFCOztZQUNuQyxZQUFZLEdBQW9CLElBQUksZUFBZSxFQUFFO1FBQzNELFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQWhMRixVQUFVOzs7O2dEQUtOLE1BQU0sU0FBQyxRQUFRO2dCQS9DWCxTQUFTO2dCQU1ULFFBQVE7Z0JBUHVCLGdCQUFnQjs7SUE0TnhELHNCQUFDO0NBQUEsQUFqTEQsSUFpTEM7U0FoTFksZUFBZTs7Ozs7O0lBQzFCLHFDQUE4Qjs7Ozs7SUFHNUIsb0NBQXdDOzs7OztJQUN4Qyx5Q0FBaUM7Ozs7O0lBQ2pDLG9DQUEyQjs7Ozs7SUFDM0IsMENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmFnRHJvcCwgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dDb25maWcgZXh0ZW5kcyBNYXREaWFsb2dDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydENvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybUNvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvbXB0Q29uZmlnIGV4dGVuZHMgSUNvbmZpcm1Db25maWcge1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ2dhYmxlQ29uZmlnPFQ+IHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+O1xuICBjb25maWc/OiBNYXREaWFsb2dDb25maWc7XG4gIC8vIENTUyBzZWxlY3RvcnMgb2YgZWxlbWVudChzKSBpbnNpZGUgdGhlIGNvbXBvbmVudCBtZWFudCB0byBiZSBkcmFnIGhhbmRsZShzKVxuICBkcmFnSGFuZGxlU2VsZWN0b3JzPzogc3RyaW5nW107XG4gIC8vIENsYXNzIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29tcG9uZW50IHNpZ25pZnlpbmcgZHJhZy1hYmlsaXR5XG4gIGRyYWdnYWJsZUNsYXNzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnZ2FibGVSZWZzPFQ+IHtcbiAgbWF0RGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VD47XG4gIGRyYWdSZWZTdWJqZWN0OiBTdWJqZWN0PERyYWdSZWY+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGREaWFsb2dTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBfZHJhZ0Ryb3A6IERyYWdEcm9wLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlcjIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD5cbiAgICogLSBjb25maWc6IE1hdERpYWxvZ0NvbmZpZ1xuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIG92ZXIgdGhlIG9wZW4oKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgb3BlbjxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ1JlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBjbG9zZUFsbCgpIG1ldGhvZCBpbiBNYXREaWFsb2cuXG4gICAqIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3MuXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nU2VydmljZS5jbG9zZUFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElBbGVydENvbmZpZyB7XG4gICAqICAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAqICAgICB0aXRsZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgY2xvc2VCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYW4gYWxlcnQgZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5BbGVydChjb25maWc6IElBbGVydENvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSB0aGlzLl9jcmVhdGVDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gICAgICBkaWFsb2dDb25maWcsXG4gICAgKTtcbiAgICBjb25zdCBhbGVydERpYWxvZ0NvbXBvbmVudDogVGRBbGVydERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBhbGVydERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5jbG9zZUJ1dHRvbikge1xuICAgICAgYWxlcnREaWFsb2dDb21wb25lbnQuY2xvc2VCdXR0b24gPSBjb25maWcuY2xvc2VCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUNvbmZpcm1Db25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIGNvbmZpcm0gZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkNvbmZpcm0oY29uZmlnOiBJQ29uZmlybUNvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gICAgICBkaWFsb2dDb25maWcsXG4gICAgKTtcbiAgICBjb25zdCBjb25maXJtRGlhbG9nQ29tcG9uZW50OiBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElQcm9tcHRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2YWx1ZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgcHJvbXB0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlblByb21wdChjb25maWc6IElQcm9tcHRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgcHJvbXB0RGlhbG9nQ29tcG9uZW50OiBUZFByb21wdERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBkcmFnZ2FibGUgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuRHJhZ2dhYmxlPFQ+KHtcbiAgICBjb21wb25lbnQsXG4gICAgY29uZmlnLFxuICAgIGRyYWdIYW5kbGVTZWxlY3RvcnMsXG4gICAgZHJhZ2dhYmxlQ2xhc3MsXG4gIH06IElEcmFnZ2FibGVDb25maWc8VD4pOiBJRHJhZ2dhYmxlUmVmczxUPiB7XG4gICAgY29uc3QgbWF0RGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VCwgYW55PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBkcmFnUmVmU3ViamVjdDogU3ViamVjdDxEcmFnUmVmPiA9IG5ldyBTdWJqZWN0PERyYWdSZWY+KCk7XG5cbiAgICBjb25zdCBDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SOiBzdHJpbmcgPSAnLmNkay1vdmVybGF5LXBhbmUnO1xuICAgIGNvbnN0IENES19PVkVSTEFZX0NPTlRBSU5FUl9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1jb250YWluZXInO1xuXG4gICAgbWF0RGlhbG9nUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdERpYWxvZ1JlZi5pZCk7XG4gICAgICBjb25zdCBkcmFnZ2FibGVFbGVtZW50OiBEcmFnUmVmID0gdGhpcy5fZHJhZ0Ryb3AuY3JlYXRlRHJhZyhkaWFsb2dFbGVtZW50KTtcblxuICAgICAgaWYgKGRyYWdnYWJsZUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKGNoaWxkQ29tcG9uZW50LCBkcmFnZ2FibGVDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoZHJhZ0hhbmRsZVNlbGVjdG9ycyAmJiBkcmFnSGFuZGxlU2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBkcmFnSGFuZGxlczogRWxlbWVudFtdID0gZHJhZ0hhbmRsZVNlbGVjdG9ycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYzogRWxlbWVudFtdLCBjdXJyOiBzdHJpbmcpID0+IFsuLi5hY2MsIC4uLkFycmF5LmZyb20oZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGN1cnIpKV0sXG4gICAgICAgICAgW10sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkcmFnSGFuZGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoSGFuZGxlcyg8SFRNTEVsZW1lbnRbXT5kcmFnSGFuZGxlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5jbG9zZXN0KENES19PVkVSTEFZX1BBTkVfU0VMRUNUT1IpO1xuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aFJvb3RFbGVtZW50KDxIVE1MRWxlbWVudD5yb290RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdW5kYXJ5RWxlbWVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuY2xvc2VzdChDREtfT1ZFUkxBWV9DT05UQUlORVJfU0VMRUNUT1IpO1xuICAgICAgaWYgKGJvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhCb3VuZGFyeUVsZW1lbnQoPEhUTUxFbGVtZW50PmJvdW5kYXJ5RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBkcmFnUmVmU3ViamVjdC5uZXh0KGRyYWdnYWJsZUVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgbWF0RGlhbG9nUmVmLCBkcmFnUmVmU3ViamVjdCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29uZmlnKGNvbmZpZzogSURpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgZGlhbG9nQ29uZmlnLndpZHRoID0gJzQwMHB4JztcbiAgICBPYmplY3QuYXNzaWduKGRpYWxvZ0NvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnO1xuICB9XG59XG4iXX0=