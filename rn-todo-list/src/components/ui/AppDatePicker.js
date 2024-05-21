import React from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/uk_UA';
import { DatePicker, ConfigProvider  } from 'antd';

export const AppDatePicker = () => {
    return (
    <ConfigProvider locale={locale}>
        <DatePicker defaultValue={moment(new Date(), 'YYYY-MM-DD')} 
                    style={{ ...styles.default}}/>
    </ConfigProvider>
    );
}

const styles = StyleSheet.create({
    default: {
        padding: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: "center"
    }
});

