import HomeScreen from './HomeScreen';

import LoginScreen from './user/LoginScreen';
import RegisterScreen from './user/RegisterScreen';
import AccountScreen from './user/AccountScreen';
import ProfileScreen from './user/ProfileScreen';
import MessageScreen from './user/MessageScreen';

import ArticleCategoryScreen from './article/ArticleCategoryScreen';
import ArticleDetailsScreen from './article/ArticleDetailsScreen';
import ArticleHomeScreen from './article/ArticleHomeScreen';
import ArticleSearchScreen from './article/ArticleSearchScreen';
import ArticlePostScreen from './article/ArticlePostScreen';


const Screens = {
  Home: HomeScreen,

  ArticleCategory: ArticleCategoryScreen,
  ArticleDetails: ArticleDetailsScreen,
  ArticleHome: ArticleHomeScreen,
  ArticleSearch: ArticleSearchScreen,
  ArticlePost: ArticlePostScreen,

  Login: LoginScreen,
  Register: RegisterScreen,
  Account: AccountScreen,
  Profile: ProfileScreen,
  Message: MessageScreen
}

export default Screens;
