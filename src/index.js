import dva from 'dva';
import './styles/common.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 引入命名空间
app.model(require('./models/music_example').default);

// 引入登录的命名空间
app.model(require('./models/music_login').default);

// 引入音乐播放列表的命名空间
app.model(require('./models/musicPlay').default);

// 引入推荐歌单的命名空间
app.model(require('./models/MusicRecommend').default);

// 引入视频区域的命名空间
app.model(require('./models/viedo').default);
// 引入搜索的命名空间
app.model(require('./models/discover').default);
// 引入播放列表的命名空间
app.model(require('./models/play').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
