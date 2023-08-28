import * as React from 'react';
import SPOListService from '../services/SPOListServices';
import { ISpoSpfxAlertsWebpartProps } from './ISpoSpfxAlertsWebpartProps';

export default class SpoSpfxAlertsWebpart extends React.Component<ISpoSpfxAlertsWebpartProps, {}> {

  public componentDidMount(): void {
    SPOListService.GetListColumns()
  }

  public render(): React.ReactElement<ISpoSpfxAlertsWebpartProps> {

    return (
      <div>
        
      </div>
    );
  }
}
