import React, { useContext } from 'react';
import { View } from 'react-native';
import Translate from '../../component/Translate';
import Image from '../../component/Image';
import Button from '../../component/Button';
import H1 from '../../component/H1';
import H3 from '../../component/H3';
import theBibleSrc from '../../asset/image/the-bible.png';
import style from './style';
import global from '../../common/style/global';
import localStorage from '../../service/localStorage';
import AppContext from '../../provider/appContext';

const SignIn = () => {
  const appContext = useContext(AppContext);

  console.log(appContext);

  const handleSignWithGoogle = () => {
    // localStorage.set('config', 'yes').then(() => {
    //   console.log('foi');
    // });
    // import { FontAwesome } from '@expo/vector-icons';
    // {/* <FontAwesome name="google" size={22} color="#333" className="mr-3" /> */}
    // estilizar o botao primary
    // theme provider
  };

  return (
    <View style={global.container}>
      <Image source={theBibleSrc} width={250} height={250} />
      <View>
        <H1 text="appName" style={style.title} />
        <H3 text="appIntroDescription" style={style.subtitle} />
      </View>
      <View>
        <Button variant="primary" onPress={() => handleSignWithGoogle()}>
          <Translate k="signInWithGoogle" />
        </Button>
        <Button style={style.buttonSignInLater} onPress={() => handleSignWithGoogle()}>
          <Translate k="signInLater" />
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
