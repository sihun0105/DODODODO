import React, {useCallback, useState} from 'react';
import {View, StatusBar, SafeAreaView, Button} from 'react-native';
import {Calendar, ThemeType} from 'react-native-calendario';
import moment from 'moment';
import 'moment/locale/ko';
import {MarkedDays} from 'react-native-month';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInParamList} from '../../AppInner';

const THEME: ThemeType = {
  monthTitleTextStyle: {
    color: '#6d95da',
    fontWeight: '300',
    fontSize: 16,
  },
  weekColumnsContainerStyle: {},
  weekColumnStyle: {
    paddingVertical: 10,
  },
  weekColumnTextStyle: {
    color: '#b6c1cd',
    fontSize: 13,
  },
  nonTouchableDayContainerStyle: {},
  nonTouchableDayTextStyle: {
    fontSize: 15,
  },
  startDateContainerStyle: {},
  endDateContainerStyle: {},
  dayContainerStyle: {},
  dayTextStyle: {
    color: '#2d4150',
    fontWeight: '200',
    fontSize: 15,
  },
  dayOutOfRangeContainerStyle: {},
  dayOutOfRangeTextStyle: {},
  todayContainerStyle: {},
  todayTextStyle: {
    color: '#6d95da',
  },
  activeDayContainerStyle: {
    backgroundColor: '#6d95da',
  },
  activeDayTextStyle: {
    color: 'white',
  },
  nonTouchableLastMonthDayTextStyle: {},
};

const truthyValue = true;

const DISABLED_DAYS = {
  '2019-11-20': truthyValue,
  '2019-11-10': truthyValue,
};

const FORMAT = 'YYYY-MM-DD';

let nowdate = new Date();
let nextdate = new Date();
nextdate.setDate(nextdate.getDate() + 1);

const START_DATE_1 = nowdate;
const END_DATE_1 = nextdate;
const MIN_DATE_1 = '2020-01-02';
const MAX_DATE_1 = '2020-04-20';

const INITIAL_STATE = {
  disableRange: false,
  startDate: moment(START_DATE_1, FORMAT).toDate(),
  endDate: moment(END_DATE_1, FORMAT).toDate(),
  minDate: moment(MIN_DATE_1, FORMAT).toDate(),
  maxDate: moment(MAX_DATE_1, FORMAT).toDate(),
};

const markedDays: MarkedDays = {
  '2020-03-12': {
    dots: [
      {
        color: 'red',
        selectedColor: 'green',
      },
      {
        color: 'blue',
        selectedColor: 'yellow',
      },
    ],
  },
  '2020-01-08': {
    theme: {
      dayContainerStyle: {
        backgroundColor: 'lightgray',
      },
    },
  },
};

type MainScreenProps = NativeStackScreenProps<LoggedInParamList, 'ChoiceDate'>;
const ChoiceDate = ({navigation}: MainScreenProps) => {
  const [startDate, setStartDate] = useState<Date | undefined>(
    INITIAL_STATE.startDate,
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    INITIAL_STATE.endDate,
  );

  const handleChangeDate = useCallback(
    (date: any) => {
      if (startDate) {
        if (endDate) {
          setStartDate(date);
          setEndDate(undefined);
        } else if (date < startDate) {
          setStartDate(date);
        } else if (date > startDate) {
          setEndDate(date);
        } else {
          setStartDate(date);
          setEndDate(date);
          moment(date).format('YYYY-MM-DD');
        }
      } else {
        setStartDate(date);
        console.log('asdasd', date);
      }
    },
    [startDate, endDate],
  );
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
        }}>
        <Button
          title="날짜 선택완료"
          onPress={() => {
            console.log(
              moment(startDate).format('YYYY-MM-DD'),
              moment(endDate).format(FORMAT),
            );
            navigation.push('Todo_Detail', {
              StartDate: moment(startDate).format(FORMAT),
              EndDate: moment(endDate).format(FORMAT),
            });
          }}></Button>
        <Calendar
          onPress={handleChangeDate}
          startDate={startDate}
          endDate={endDate}
          startingMonth={'2019-11-01'}
          markedDays={markedDays}
          monthHeight={370}
          numberOfMonths={100}
          initialListSize={4}
          firstDayMonday
          theme={THEME}
          disabledDays={DISABLED_DAYS}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChoiceDate;
