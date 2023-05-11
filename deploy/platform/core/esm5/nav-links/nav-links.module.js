/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { TdNavLinksComponent } from './nav-links.component';
var CovalentNavLinksModule = /** @class */ (function () {
    function CovalentNavLinksModule() {
    }
    CovalentNavLinksModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TdNavLinksComponent],
                    // directives, components, and pipes owned by this NgModule
                    exports: [TdNavLinksComponent],
                    imports: [
                        CommonModule,
                        CovalentCommonModule,
                        CovalentExpansionPanelModule,
                        MatRippleModule,
                        MatMenuModule,
                        MatListModule,
                        MatIconModule,
                        MatDividerModule,
                        RouterModule,
                    ], // modules needed to run this module
                },] }
    ];
    return CovalentNavLinksModule;
}());
export { CovalentNavLinksModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL25hdi1saW5rcy8iLCJzb3VyY2VzIjpbIm5hdi1saW5rcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQ7SUFBQTtJQWVxQyxDQUFDOztnQkFmckMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDOztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsNEJBQTRCO3dCQUM1QixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsWUFBWTtxQkFDYixFQUFFLG9DQUFvQztpQkFDeEM7O0lBQ29DLDZCQUFDO0NBQUEsQUFmdEMsSUFlc0M7U0FBekIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuXG5pbXBvcnQgeyBDb3ZhbGVudENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5pbXBvcnQgeyBDb3ZhbGVudEV4cGFuc2lvblBhbmVsTW9kdWxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZXhwYW5zaW9uLXBhbmVsJztcblxuaW1wb3J0IHsgVGROYXZMaW5rc0NvbXBvbmVudCB9IGZyb20gJy4vbmF2LWxpbmtzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RkTmF2TGlua3NDb21wb25lbnRdLCAvLyBkaXJlY3RpdmVzLCBjb21wb25lbnRzLCBhbmQgcGlwZXMgb3duZWQgYnkgdGhpcyBOZ01vZHVsZVxuICBleHBvcnRzOiBbVGROYXZMaW5rc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ292YWxlbnRDb21tb25Nb2R1bGUsXG4gICAgQ292YWxlbnRFeHBhbnNpb25QYW5lbE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sIC8vIG1vZHVsZXMgbmVlZGVkIHRvIHJ1biB0aGlzIG1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudE5hdkxpbmtzTW9kdWxlIHt9XG4iXX0=