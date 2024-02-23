
import Trial from '@components/Trial'
import { useTranslation } from 'react-i18next';
function App() {
    const { t, i18n } = useTranslation();
    console.log(i18n)
  return (
    <div className="App">
        <Trial/>
        <div className='flex'>  <h1>{t('name')}</h1>    <h1>{t('manish')}</h1> </div>
        <button className=' bg-red-500 mr-4' onClick={()=> i18n.changeLanguage('en')}>change language to en</button>
        <button className=' bg-red-500' onClick={()=> i18n.changeLanguage('vn')}>change language to vn</button>
    </div>
  );
}

export default App;
