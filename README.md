# tabuada-android

Bem vindo a Tabuada para Android usando React-Native.

Versão em produção: https://play.google.com/store/apps/details?id=com.rntabuada

Alguns passos antes do projeto está pronto para ser rodado no seu ambiente:

1º: Logo após a restauração dos pacotes usando o npm ou yarn deve-se ir a pasta "node_modules\react-native-gesture-handler\android\src\main\java\com\swmansion\gesturehandler\react" e alterar os arquivos "RNGestureHandlerEvent.java" e "RNGestureHandlerStateChangeEvent.java" conforme o seguinte commit https://github.com/kaiterra/react-native-gesture-handler/commit/99d4ddcbc2128ad4634a28caf2011eaaa9d2f1b0. Isso elimina um bug que pode fazer o aplicativo travar em produção quando a tela é arrastada para o lado quando já está no final da TabView.

2º: Em https://console.firebase.google.com você deve criar um novo aplicativo e baixar o arquivo de configuração "google-services.json" e coloca-lo dentro do caminho android->app. Com isso os serviços de ads vão funcionar corretamente. (A aplicação não está preparada no momento para rodar sem essa configuração).

3º: Crie um aplicativo Android no Microsoft AppCenter e pegue sua key e coloque dentro de um arquivo chamado "appcenter-config.json" em android->app->src->main->assets na forma como exemplificado no arquivo "appcenter-config.json.example".

4º: Na pasta raiz do projeto crie um arquivo chamado "firebase.json" conforme o "firebase.json.example" e coloque sua ad unit no admob.

5º: Na pasta android->app crie o arquivo .keystore com o nome "tabuada.keystore" conforme indicado em https://reactnative.dev/docs/signed-apk-android

6º: Crie e edite o arquivo .env na raiz do projeto para referenciar a senha criada no passo anterior.
