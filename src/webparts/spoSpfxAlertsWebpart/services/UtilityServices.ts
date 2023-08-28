import { WebPartContext } from '@microsoft/sp-webpart-base';
import { SPFI, SPFx, spfi } from '@pnp/sp/presets/all';
export default class UtilityServices {
    public static sp: SPFI;
    public static webPartContext: unknown;

    public static GetPnP(context?: WebPartContext): SPFI {
        if(this.sp === undefined) { 
            if(!context) {
                throw new Error("context is invalid!");
            }
            this.sp = spfi().using(SPFx(context));
        }
        if(context !== undefined) {
            this.webPartContext = context
        }
        return this.sp;
    }
}