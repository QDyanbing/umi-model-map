import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  // const [pageState, setPageState] = useState({});

  const { dataMap } = useModel('useData', (model) => ({
    dataMap: model.dataMap,
  }));

  // useEffect(() => {
  //   console.log(dataMap, 'useEffect.dataMap');

  //   setPageState({ dataMap });
  // }, [dataMap, setPageState]);

  console.log(dataMap, 'dataMap');

  // console.log(pageState, 'pageState');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
