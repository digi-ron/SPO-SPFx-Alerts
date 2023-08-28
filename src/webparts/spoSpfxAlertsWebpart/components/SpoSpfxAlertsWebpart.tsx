import * as React from 'react';
import UtilityServices from '../services/UtilityServices';
import SPOListService from '../services/SPOListServices';
import { ISpoSpfxAlertsWebpartProps } from './ISpoSpfxAlertsWebpartProps';

export default class SpoSpfxAlertsWebpart extends React.Component<ISpoSpfxAlertsWebpartProps, {}> {

  public componentDidMount(): void {
    UtilityServices.GetPnP()
    SPOListService.GetListColumns("Alerts")
  }

  public render(): React.ReactElement<ISpoSpfxAlertsWebpartProps> {

    return (
      <div>
        
      </div>
    );
  }
}
