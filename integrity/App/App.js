import Session from './Session';
import { Keyboard } from 'react-native';


export class App extends Session
{
  constructor()
  {
    super();
  }

  keyBoardIsVisible(setter)
  {
    return () => {
        const keyboardDidShowListener = Keyboard.addListener( 'keyboardDidShow', e => setter(e.endCoordinates.height)  );
        const keyboardDidHideListener = Keyboard.addListener( 'keyboardDidHide', () => setter(false) );

        return () => { keyboardDidHideListener.remove(); keyboardDidShowListener.remove(); };
      };
  }

  nextFrameOnFocus(nextFrame, navigation)
  {
    return () => {
      const onFocus = navigation.addListener('focus', () => nextFrame(frame => frame+1) );
      return () => onFocus;
    }
  }
}

export default App;
