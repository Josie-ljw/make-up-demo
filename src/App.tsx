import { useState } from 'react'

type BeautyTab = 'home' | 'cases' | 'teachers' | 'booking' | 'mine'

const beautyTabLabels: Record<BeautyTab, string> = {
  home: '首页',
  cases: '案例',
  teachers: '老师',
  booking: '预约',
  mine: '我的',
}

const beautyImages = {
  featured: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&h=1125&q=80',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
  posterBeforeAfter: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&h=400&q=80',
  posterEditorial: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&h=400&q=80',
  teacherPoster: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&h=600&q=80',
} as const

const beautyTabData = {
  cases: [
    {
      title: '通勤清透妆',
      desc: '清爽底妆、气色感、见客户也自然',
      labels: ['通勤', '新手'],
      price: '￥199',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      title: '婚礼精致新娘妆',
      desc: '高光、持妆、镜头表现力',
      labels: ['婚礼', '跟妆'],
      price: '￥1299',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      title: '高端晚宴妆',
      desc: '轮廓修饰、氛围感、精致细节',
      labels: ['晚宴', '高级感'],
      price: '￥899',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      title: '约会氛围感妆',
      desc: '柔和眼妆、立体唇色、亲和力',
      labels: ['约会', '氛围感'],
      price: '￥299',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&h=200&q=80',
    },
  ],
  teachers: [
    {
      name: 'Luna 老师',
      title: '首席妆造师',
      desc: '擅长通勤妆 / 婚礼妆 / 高端场景妆',
      tags: ['10 年经验', '作品集指导', '高端定制'],
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      name: 'Mia 老师',
      title: '作品集导师',
      desc: '擅长轻韩风 / 甜酷风 / 拍摄妆容',
      tags: ['韩系妆造', '拍摄造型', '课程导师'],
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    },
  ],
  booking: [
    { label: '婚礼跟妆', hint: '定制妆容与时间预约', price: '￥1299', desc: '含试妆沟通、当天跟妆、补妆建议' },
    { label: '活动造型', hint: '晚宴 / 发布会 / 拍摄', price: '￥899', desc: '适合红毯、企业活动、品牌拍摄' },
    { label: '新手体验课', hint: '先试学再升级', price: '￥199', desc: '适合零基础入门，快速建立审美' },
  ],
  mine: [
    { label: '我的订单', hint: '查看预约、课程和商品' },
    { label: '我的收藏', hint: '保存喜欢的案例与老师' },
    { label: '专属顾问', hint: '一对一咨询与回复' },
    { label: '地址管理', hint: '查看常用收货与到店地址' },
  ],
}

function BeautyMiniProgramDemo() {
  const [activeTab, setActiveTab] = useState<BeautyTab>('home')

  const tabContent = {
    home: (
      <>
        <section
          className="beauty-hero beauty-hero-home memory-hero"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(28, 24, 20, 0.08) 0%, rgba(28, 24, 20, 0.78) 100%), url(${beautyImages.featured})`,
          }}
        >
          <div className="memory-hero-badge">STUDIO · MAKEUP</div>
          <h2>把每一面妆容，留成一张会呼吸的影像</h2>
          <p>参考留念影像的纸感留白与作品叙事，让案例、老师与预约在同一页自然流转。</p>
          <div className="beauty-hero-actions">
            <button type="button" className="primary-ghost">预约档期</button>
            <button type="button" className="secondary-ghost">浏览作品</button>
          </div>
        </section>

        <section className="beauty-surface">
          <div className="mini-section-title">
            <h2>今日主推</h2>
            <span>精选推荐</span>
          </div>
          <div className="featured-card luxury-card">
            <img className="featured-image" src={beautyImages.featured} alt="通勤清透妆海报" loading="lazy" />
            <div className="featured-content">
              <div className="title-row">
                <h3>通勤清透妆 · 新手体验课</h3>
                <span className="price-tag">￥199</span>
              </div>
              <p>轻盈底妆、眉眼修饰、快速出门，适合新手第一次建立妆容感。</p>
              <div className="tag-row">
                <span>新手友好</span>
                <span>高转化</span>
                <span>轻体验</span>
              </div>
            </div>
          </div>
        </section>

        <section className="beauty-surface">
          <div className="mini-section-title">
            <h2>场景分类</h2>
            <span>按需求找内容</span>
          </div>
          <div className="beauty-tag-grid">
            {['新手入门', '通勤上班', '约会出门', '婚礼跟妆', '晚宴活动', '拍摄出片', '同行进阶', '高端定制'].map((tag) => (
              <button key={tag} type="button" className="beauty-tag">
                {tag}
              </button>
            ))}
          </div>
        </section>
      </>
    ),
    cases: (
      <section className="beauty-surface">
        <div className="mini-section-title">
          <h2>妆容案例</h2>
          <span>审美参考</span>
        </div>
        <div className="beauty-case-list">
          {beautyTabData.cases.map((item) => (
            <article key={item.title} className="beauty-case-card">
              <img className="case-thumb" src={item.image} alt={item.title} loading="lazy" />
              <div className="beauty-case-body">
                <div className="title-row">
                  <h3>{item.title}</h3>
                  <span className="price-tag">{item.price}</span>
                </div>
                <p>{item.desc}</p>
                <div className="tag-row">
                  {item.labels.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="poster-grid">
          <div className="poster-card poster-a" style={{ backgroundImage: `url(${beautyImages.posterBeforeAfter})` }}>
            <span>Before / After</span>
            <strong>自然通勤感</strong>
          </div>
          <div className="poster-card poster-b" style={{ backgroundImage: `url(${beautyImages.posterEditorial})` }}>
            <span>Editorial Look</span>
            <strong>高端晚宴氛围</strong>
          </div>
        </div>
      </section>
    ),
    teachers: (
      <section className="beauty-surface split-grid">
        <div>
          <div className="mini-section-title">
            <h2>老师作品集</h2>
            <span>专业背书</span>
          </div>
          {beautyTabData.teachers.map((teacher) => (
            <article key={teacher.name} className="mentor-card">
              <img className="mentor-avatar" src={teacher.image} alt={teacher.name} loading="lazy" />
              <div className="mentor-copy">
                <h3>{teacher.name}</h3>
                <p>{teacher.title} · {teacher.desc}</p>
                <div className="tag-row">
                  {teacher.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div>
          <div className="mini-section-title">
            <h2>老师海报</h2>
            <span>视觉包装</span>
          </div>
          <div className="poster-card teacher-poster" style={{ backgroundImage: `url(${beautyImages.teacherPoster})` }}>
            <span>Mentor Portfolio</span>
            <strong>专业、克制、轻奢感</strong>
          </div>
          <div className="beauty-highlight-list">
            <div className="beauty-highlight-item"><strong>1200+</strong><span>累计服务案例</span></div>
            <div className="beauty-highlight-item"><strong>4.9</strong><span>用户评分</span></div>
            <div className="beauty-highlight-item"><strong>48h</strong><span>预约响应</span></div>
          </div>
        </div>
      </section>
    ),
    booking: (
      <section className="beauty-surface">
        <div className="mini-section-title">
          <h2>服务预约</h2>
          <span>直接转化</span>
        </div>
        <div className="reservation-list">
          {beautyTabData.booking.map((item) => (
            <article key={item.label} className="reservation-card">
              <div>
                <p className="reservation-label">{item.price}</p>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
              <button type="button" className="primary-ghost full">立即预约</button>
            </article>
          ))}
        </div>
        <div className="form-preview">
          <div className="form-row"><span>预约日期</span><span>2026-06-08</span></div>
          <div className="form-row"><span>预约时段</span><span>14:00 - 16:00</span></div>
          <div className="form-row"><span>联系人</span><span>请输入姓名</span></div>
        </div>
      </section>
    ),
    mine: (
      <section className="beauty-surface mine-panel">
        <div className="mine-card">
          <img className="mine-avatar" src={beautyImages.avatar} alt="用户头像" loading="lazy" />
          <div>
            <h3>你好，Lily</h3>
            <p>你已收藏 8 个案例，预约 2 个服务，正在关注 1 个老师。</p>
          </div>
        </div>
        <div className="mine-stats">
          <div><strong>3</strong><span>已购课程</span></div>
          <div><strong>8</strong><span>收藏案例</span></div>
          <div><strong>2</strong><span>待预约</span></div>
        </div>
        <div className="mine-list">
          {beautyTabData.mine.map((item) => (
            <article key={item.label} className="mine-item">
              <div>
                <h3>{item.label}</h3>
                <p>{item.hint}</p>
              </div>
              <span>›</span>
            </article>
          ))}
        </div>
      </section>
    ),
  } as const

  return (
    <div className="beauty-demo-page memory-studio">
      <header className="beauty-topbar">
        <div>
          <p className="eyebrow beauty-eyebrow">留念影像 · 妆造</p>
          <h1>轻奢妆造 Studio</h1>
        </div>
      </header>

      <main className="beauty-main">{tabContent[activeTab]}</main>

      <nav className="beauty-tabbar memory-tabbar" aria-label="页面导航">
        {(Object.keys(beautyTabLabels) as BeautyTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            className={activeTab === tab ? 'tab-chip active' : 'tab-chip'}
            onClick={() => setActiveTab(tab)}
          >
            {beautyTabLabels[tab]}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default function App() {
  return (
    <div className="app-shell beauty-route">
      <BeautyMiniProgramDemo />
    </div>
  )
}
