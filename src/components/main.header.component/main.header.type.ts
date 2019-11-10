/* Node Module */
import { RouteComponentProps } from 'react-router-dom';
/* Store */
import { ICspFtn_AC } from '../../store/csp/csp.type';

export interface IMainHeaderProps extends RouteComponentProps, Partial<ICspFtn_AC> {
  cspData: object,
}

export type IMainHeaderState = {
  importCompleted: boolean,
  inputData: string,
  reImportCheckbox: {
    label: string,
    checked: boolean,
    name: string
},
  errorMessage: {
    show: boolean,
    message: string,
  },
  successMessage: {
    show: boolean,
    message: string,
  },
}
