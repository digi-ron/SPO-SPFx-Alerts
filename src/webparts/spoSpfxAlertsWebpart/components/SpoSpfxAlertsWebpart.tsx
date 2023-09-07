import * as React from 'react';
import SPOListService from '../services/SPOListServices';
import { ISpoSpfxAlertsWebpartProps } from './ISpoSpfxAlertsWebpartProps';
import { ActivityItem, Spinner } from 'office-ui-fabric-react';
import UtilityServices from '../services/UtilityServices';
import { IAlert, ESeverityLevel} from '../model/IAlert';
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
          this.state.alerts.sort((a, b) => {return this._determinePrecedence(a, b)}).map(alert => {
            //render
            return (
              <ActivityItem className={this._determineStyle(alert.severity)}
                activityDescription={[
                  <h1 className={styles.alertTitle}>{alert.alertTitle}</h1>
                ]}
                comments={[
                  <span className={this._determineStyle(alert.severity)}>{alert.alertContent} {alert.URL !== null && <a href={alert.URL.Url} className={styles.link}>{alert.URL.Description !== null ? alert.URL.Description : "Click Here"}</a>}</span>,
                ]}
              />
            )
          })
          }
      </div>
    );
  }

  private _determineStyle(sevLevel: ESeverityLevel): string {
    //determine style
    //NOTE: for some reason I had to change the enum to strings, as the ESeverityLevel commands were returning numbers but sevLevel was a string
    switch(sevLevel) {
      case ESeverityLevel.Good : {
        return styles.good
      }
      case ESeverityLevel.Warning : {
        return styles.warning
      }
      case ESeverityLevel.Critical : {
        return styles.error
      }
      default : {
        return styles.information
      }
    }
  }

  private _determinePrecedence(a: IAlert, b:IAlert): number {
    let output: number = 0;
    output += this._numberAssignment(a.severity)
    output -= this._numberAssignment(b.severity)
    return output
  }

  private _numberAssignment(sevLevel: ESeverityLevel): number {
    switch(sevLevel) {
      case ESeverityLevel.Good : {
        return 2
      }
      case ESeverityLevel.Warning : {
        return 1
      }
      case ESeverityLevel.Critical : {
        return 0
      }
      default : {
        return 3
      }
    }
  }
}
