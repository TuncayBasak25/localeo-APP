import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, TextInput, View, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { 
  fullScreen, lay, bg, border, text, font, 
  inlineFormWrapper, inlineFormText,
  primaryButtonWrapper, primaryButtonText,
  closeButtonWrapper,
  mg, pd, colors
} from '../../styles/styles';

import { FullScreen, WrappedButton, WrappedTextInput } from '../../components/Components';
import { SimpleLineIcons, Octicons, Ionicons, MaterialCommunityIcons, Entypo, AntDesign, Feather } from '@expo/vector-icons'; 

import { color, log } from 'react-native-reanimated';

import Api from 'localeo-api';
import App from '../../App/App';

export function AccountScreen({ route, navigation })
{
  const { App } = route.params;

  const [changeUsername, setChangeUsername] = useState(false)
  const [newUsername, setNewUsername] = useState("")
  const [confirmationChangeUsername, setConfirmationChangeUsername] = useState(false)

  const [changeAddress, setChangeAddress] = useState(false)
  const [newAddress, setNewAddress] = useState("")
  const [confirmationChangeAddress, setConfirmationChangeAddress] = useState(false)
  
  const [changeEmail, setChangeEmail] = useState(false)
  const [newEmail, setNewEmail] = useState("")
  const [confirmationChangeEmail, setConfirmationChangeEmail] = useState(false)

  const [changePassword, setChangePassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmationChangePassword, setConfirmationChangePassword] = useState(false)

  const [changeAvatar, setChangeAvatar] = useState(false)
  const [newAvatar, setNewAvatar] = useState(null)
  const [confirmationChangeAvatar, setConfirmationChangeAvatar] = useState(false)


  return (
    <FullScreen>
      <View style={[lay.relW(100), lay.relH(12), bg.primary, border.blr(30), border.brr(30), lay.jc.center, lay.ai.center, lay.row, lay.jc.between]}>
        <WrappedButton
          subStyle={[lay.jc.center, lay.ai.center]}
          onPress={ navigation.goBack }>
          <AntDesign style={[mg.h(30), text.secondary]} name="arrowleft" size={30} />
        </WrappedButton>
        <Text style={[text.size(26), text.secondary]}>Votre compte</Text>
        <AntDesign style={mg.r(30)} name="check" size={24} color="green" />
      </View>

      <View>
        <Text style={[text.size(22), text.secondary, mg.l(30), mg.r(30), mg.t(30)]}>Vos informations</Text>
      </View>

      <View style={[lay.relW(85), lay.relH(45), bg.primary, border.blr(15), border.brr(15), border.tlr(15), border.trr(15), mg.t(10), mg.l(30), mg.r(30), lay.jc.center,]}>

      { /* Pseudo */ }
        <Text style={[text.size(18), text.secondary, pd.r(10), pd.l(20)]}>Pseudo</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          { changeUsername ?
            <TextInput
              style={[text.size(15), bg.dark, lay.grw(1), mg.r(10), mg.l(20), text.white]}
              onChangeText={setNewUsername}
              onSubmitEditing={() => Api.updateUser({username: newUsername}).then( ({ error, succes }) => { if (succes) {App.user.username = newUsername; setConfirmationChangeUsername(true); setChangeUsername(false)} else console.log(error) } ).catch(e => console.log(e)) }
            ></TextInput>
          :
          <>
            <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>{ App.user.username }</Text>
            { confirmationChangeUsername && <Text style={[text.size(13), text.orange, pd.r(10), pd.l(20)]}>Changement effectué !</Text> }
          </>
          }

          <WrappedButton
            onPress={() => setChangeUsername(true)}
            style={[lay.h(26), lay.w(26), mg.r(30)]}>
            <Feather name="edit" size={26} color="grey" />
          </WrappedButton>

        </View>


        { /* Email */ }
        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Email</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
        { changeEmail ?
          <TextInput 
            style={[text.size(15), bg.dark, lay.grw(1), mg.r(10), mg.l(20), text.white]}
           onChangeText={setNewEmail}
           onSubmitEditing={() => Api.updateUser({email: newEmail}).then( ({ error, succes }) => { if (succes) {App.user.email = newEmail; setConfirmationChangeEmail(true); setChangeEmail(false)} else console.log(error) } ).catch(e => console.log(e)) }
          ></TextInput>
          :
          <>
            <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>{ App.user.email }</Text>
            { confirmationChangeEmail && <Text style={[text.size(13), text.orange, pd.r(10), pd.l(20)]}>
            <AntDesign style={mg.r(30)} name="check" size={24} color="orange" />
            </Text> }
          </>
        }
        
        <WrappedButton
            onPress={() => setChangeEmail(true)}
            style={[lay.h(26), lay.w(26), mg.r(30)]}>
            <Feather name="edit" size={26} color="grey" />
          </WrappedButton>

        </View>

        { /* Mot de passe */ }
        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Mot de passe</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          { changePassword ?
            <TextInput
                style={[text.size(15), bg.dark, lay.grw(1), mg.r(10), mg.l(20), text.white]}
                onChangeText={setNewPassword}
                onSubmitEditing={() => Api.updateUser({password: newPassword}).then( ({ error, succes }) => { if (succes) {App.user.password = newPassword; setConfirmationChangePassword(true); setChangePassword(false)} else console.log(error) } ).catch(e => console.log(e)) }
                password={true} 
                secureTextEntry={true}
            ></TextInput>
          :
          <>
            <Text style={[text.size(15), text.secondary, pd.r(10), pd.l(20), text.white]}>***********</Text>
            { confirmationChangePassword && <Text style={[text.size(13), text.orange, pd.r(10), pd.l(20)]}>
              <AntDesign style={mg.r(30)} name="check" size={24} color="orange" />
            </Text> }
          </>
          }

          <WrappedButton
            onPress={() => setChangePassword(true)}
            style={[lay.h(26), lay.w(26), mg.r(30)]}>
            <Feather name="edit" size={26} color="grey" />
          </WrappedButton>
        </View> 

        { /* Avatar */ }
        <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Avatar</Text>
        <View style={[lay.row, lay.relW(100), lay.jc.between]}>
          
          <Image source={ App.user.Avatar ? {uri: `data:images/jpeg;base64,${App.user.Avatar.data}`} : (newAvatar ? {uri: `data:images/jpeg;base64,${newAvatar}`} : require('../../../assets/avatar1.png')) }
            style={[lay.relW(25), lay.ratio(1), border.r(50), mg.l(20)]}
          />

          { (typeof newAvatar === 'string') &&
            <WrappedButton
            onPress={() => Api.updateUser({ avatar: newAvatar }).then( ({ error, succes }) => { if (succes) {App.user.Avatar = { data: newAvatar}; setConfirmationChangeAvatar(true); setNewAvatar(false)} else console.log(error) } ).catch(e => console.log(e)) }
            style={[lay.h(26), lay.w(26), mg.r(30)]}>
            <Feather name="save" size={26} color="white" />
          </WrappedButton>
          }

          { confirmationChangeAvatar && <AntDesign style={mg.r(30)} name="check" size={24} color="orange" />}

          <WrappedButton
            onPress={() => App.handleChooseAvatar().then( avatar => setNewAvatar(avatar) ) .catch(e => console.log(e)) }
            style={[lay.h(26), lay.w(26), mg.r(30)]}>
            <Feather name="edit" size={26} color="white" />
          </WrappedButton>



        </View>

      </View>

      <View>
        <Text style={[text.size(22), text.secondary, mg.l(30), mg.r(30), mg.t(30)]}>
        Vos préférences
        </Text>
      </View>

      <View style={[lay.relW(85), lay.relH(15), bg.primary, border.blr(15), border.brr(15), border.tlr(15), border.trr(15), mg.t(10), mg.l(30), mg.r(30), lay.jc.center,]}>

          <View style={[lay.row, lay.relW(100), lay.jc.between]}>
            <Text style={[text.size(18), text.secondary, pd.r(10), pd.l(20)]}>Notification de messages</Text>
            <MaterialCommunityIcons style={mg.r(20)} name="toggle-switch-off" size={42} color="orange" />
          </View>

          <View style={[lay.row, lay.relW(100), lay.jc.between]}>
            <Text style={[text.size(18), text.secondary, mg.t(20), pd.r(10), pd.l(20)]}>Notification de ventes</Text>
            <MaterialCommunityIcons style={[mg.r(20), pd.t(15)]} name="toggle-switch" size={42} color="grey" />
          </View>

      </View>

    </FullScreen>
  );
}

export default AccountScreen;

const superstyle = [inlineFormWrapper, mg.b(0), mg.v(5)];
const substyle = [lay.row, lay.jc.between, lay.ai.center, bg.primary, border.r(10)];