import { IDataForForm } from '@/interfaces/IDataForForms';
import { Dispatch, SetStateAction } from 'react';

export type setDataType = React.Dispatch<React.SetStateAction<IDataForForm>>;
export type setStateActionType<T> = Dispatch<SetStateAction<T>>;
