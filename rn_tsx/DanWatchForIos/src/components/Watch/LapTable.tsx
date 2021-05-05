import React, {useRef, useEffect, VFC} from 'react';
import {View, StyleSheet, ScrollView, Platform} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

interface Props {
  tableData: never[];
}

const LapTable: VFC<Props> = ({tableData}) => {
  const tableHead = ['구간', '구간기록', '전체기록'];
  const scrollBar: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    scrollBar.current?.scrollToEnd({animated: true});
  }, [tableData]);

  return (
    <>
      <View style={styles.scrollView}>
        <View style={styles.tableContainer}>
          <Table>
            <Row
              flexArr={[1, 3, 3]}
              data={tableHead}
              style={styles.tableHeader}
              textStyle={styles.headerText}
            />
          </Table>
        </View>
      </View>
      <ScrollView style={styles.scroll} ref={scrollBar}>
        <View style={styles.scrollView}>
          <View style={styles.tableContainer}>
            <Table>
              <Rows
                flexArr={[1, 3, 3]}
                data={tableData}
                textStyle={styles.itemText}
              />
            </Table>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    maxHeight: '55%',
    marginTop: '10%',
    ...Platform.select({
      ios: {maxHeight: '55%'},
      android: {maxHeight: '50%'},
    }),
  },
  scrollView: {
    flexDirection: 'row',
    width: 350,
  },
  tableContainer: {
    flex: 1,
  },
  tableHeader: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  headerText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 21,
  },
  itemText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    margin: 6,
  },
});
export default React.memo(LapTable);
