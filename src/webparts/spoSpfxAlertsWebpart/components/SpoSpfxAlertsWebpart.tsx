import * as React from 'react';
import SPOListService from '../services/SPOListServices';
import { ISpoSpfxAlertsWebpartProps } from './ISpoSpfxAlertsWebpartProps';
import { ActivityItem, Link, Spinner } from 'office-ui-fabric-react';
import UtilityServices from '../services/UtilityServices';
import IAlert from '../model/IAlert';
import styles from './SpoSpfxAlertsWebpart.module.scss';

export interface ISpoSpfxAlertsWebpartState {
  alerts: IAlert[]
}

export default class SpoSpfxAlertsWebpart extends React.Component<ISpoSpfxAlertsWebpartProps, ISpoSpfxAlertsWebpartState> {

  public componentDidMount(): void {
    UtilityServices.GetPnP()
    SPOListService.GetListItems().then(e=>{this.setState({alerts: e})})
  }

  public render(): React.ReactElement<ISpoSpfxAlertsWebpartProps> {

    return (
      <div className={styles.alert}>
        {this.state === null ?
          <Spinner label="Loading Alerts..."/>
          :
          this.state.alerts.map(alert => {
            return (
              <ActivityItem className={styles.warning}
                activityDescription={[
                  <Link href={(alert.URL.Url !== "") ? alert.URL.Url : undefined}>{alert.alertTitle}</Link>
                ]}
                comments={[
                  <span className={styles.alert}>{alert.alertContent}</span>
                ]}
              />
            )
          })
          }
      </div>
    );
  }
}
