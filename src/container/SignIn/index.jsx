import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Translate from '../../component/Translate';
import Image from '../../component/Image';
import theBibleSrc from '../../asset/image/the-bible.png';
import style from './style';

import { Button } from '@ant-design/react-native';

// import { Button } from 'antd-mobile';


const SignIn = () => {
  return (
    <View style={style.container}>
      <Image source={theBibleSrc} width={250} height={250} />
      {/* <Translate k="appName" /> */}
      <Button>Start</Button>
      {/* <p className="py-2"> */}
      {/* <Translate k="appIntroDescription" /> */}
      {/* </p> */}
      {/* <div className="d-flex flex-column my-5"> */}
      {/* <Button>Start</Button> */}
      {/* <Button variant="primary" className="py-3 px-4 d-flex">
          <FontAwesome name="google" size={22} color="#fff" className="mr-3" />
          <strong>
            <Translate k="signInWithGoogle" />
          </strong>
        </Button>
        <Button variant="light" className="mt-3">
          <Translate k="signInLater" />
        </Button> */}
      {/* </div> */}
    </View>
  );
};

export default SignIn;
