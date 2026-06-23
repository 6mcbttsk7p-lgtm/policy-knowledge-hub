import React, { useState } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  Home,
  FileText,
  Clock3,
  MessageCircle,
  Users,
  ArrowRight,
  ArrowLeft,
  Share2,
  Save,
  Download,
  MoreVertical,
  ThumbsUp,
  Menu,
} from 'lucide-react';

const homePolicies = {
    Environment: [
    {
      title: 'NRW Railway Solar Programme',
      meta: 'Promoting solar energy integration along railway infrastructure in North Rhine-Westphalia.',
      stats: ['56', '12', '210'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'EU Nature Restoration Law',
      meta: 'Regulation on the restoration of degraded ecosystems across the European Union by 2030.',
      stats: ['84', '15', '320'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'National Circular Economy Strategy',
      meta: 'Transitioning to a circular economy through policy and innovation initiatives.',
      stats: ['31', '8', '142'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'Carbon Border Adjustment Mechanism (CBAM)',
      meta: 'EU initiative to reduce carbon leakage and promote global climate action.',
      stats: ['19', '7', '98'],
      badge: 'Trending',
      active: false,
    },
  ],
    'Digital Governance': [
    {
      title: "Children's Privacy Protection Act Revision",
      meta: 'Strengthening data protection and privacy rights for children in the digital age.',
      stats: ['124', '17', '356'],
      active: true,
      badge: 'Hot',
    },
    {
      title: 'EU AI Act Implementation',
      meta: 'Operationalizing the EU AI Act across member states.',
      stats: ['65', '11', '221'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'Digital Identity Framework',
      meta: 'Establishing secure and interoperable digital identity systems.',
      stats: ['30', '7', '134'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'Online Platform Accountability Regulation',
      meta: 'Ensuring transparency and accountability for digital platforms.',
      stats: ['28', '9', '167'],
      badge: 'Trending',
      active: false,
    },
  ],
    Education: [
    {
      title: 'AI in Schools Strategy',
      meta: 'Guiding responsible AI adoption in classrooms and public education systems.',
      stats: ['21', '5', '87'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'Teacher Workforce Plan 2030',
      meta: 'Supporting long-term workforce planning and teacher retention.',
      stats: ['18', '4', '64'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'Higher Education Funding Reform',
      meta: 'Revising resource allocation for universities and colleges.',
      stats: ['11', '3', '52'],
      badge: 'Trending',
      active: false,
    },
    {
      title: 'Skills for the Future Initiative',
      meta: 'Aligning training systems with future labour market demands.',
      stats: ['15', '4', '70'],
      badge: 'Trending',
      active: false,
    },
  ],
};

const researchSummaries = [
  {
    id: 'apps',
    title: "Protecting Children's Data in Educational Apps",
    author: 'Dr. Anna Müller',
    org: 'Policy Research Institute',
    date: '2 May 2024',
    excerpt:
      'This study analyses data collection practices in educational apps used by children and highlights key privacy risks and policy gaps...',
    tags: ['2 min read', 'Data Protection', 'Educational Technology'],
    image: '🔐',
    badge: 'New',
  },
  {
    id: 'consent',
    title: 'Parental Consent Models: A Comparative Review',
    author: 'Institute for Digital Rights',
    org: '',
    date: '28 Apr 2024',
    excerpt:
      'We compare different parental consent mechanisms across jurisdictions and evaluate their effectiveness in practice...',
    tags: ['2 min read', 'Parental Consent', 'Comparative Analysis'],
    image: '👨‍👩‍👧',
    badge: '',
  },
  {
    id: 'age',
    title: "Age Assurance Technologies and Children's Privacy",
    author: 'Tech Policy Watch',
    org: '',
    date: '22 Apr 2024',
    excerpt:
      'An overview of emerging age assurance technologies and their implications for children’s data privacy and inclusion.',
    tags: ['2 min read', 'Age Assurance', 'Technology'],
    image: '🛡️',
    badge: '',
  },
  {
    id: 'gaps',
    title: 'Legal Gaps in the Current Framework',
    author: 'Dr. Sophia Klein',
    org: 'University of Cologne',
    date: '15 Apr 2024',
    excerpt:
      'Identifies key legal gaps in existing laws and proposes amendments to strengthen digital rights.',
    tags: ['3 min read', 'Legal Analysis', 'Policy Recommendation'],
    image: '⚖️',
    badge: '',
  },
];

const comments = [
  {
    name: 'Li Wei',
    role: 'Policy Analyst, Ministry of Justice',
    text:
      'The article raises an important point about consent fatigue. We are exploring age-appropriate consent flows in our ongoing consultation.',
    likes: 12,
    time: '2h ago',
  },
  {
    name: 'Markus Becker',
    role: 'Researcher',
    text:
      'Agree. Standardized consent frameworks across EU member states would help both parents and platforms.',
    likes: 8,
    time: '4h ago',
  },
  {
    name: 'Clara Dubois',
    role: 'NGO Representative',
    text:
      'We also need stronger enforcement mechanisms, not just better consent design.',
    likes: 15,
    time: '6h ago',
  },
  {
    name: 'Jonas Müller',
    role: 'EdTech Founder',
    text:
      'From industry perspective, clear guidance on age assurance would be very helpful.',
    likes: 6,
    time: '8h ago',
  },
];

function AppHeader({ onNavigate }: { onNavigate: (page: 'home' | 'policy' | 'article') => void }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-blue-500 text-white font-bold">
            ✦
          </div>
          <div className="text-[18px] font-semibold text-[#173b84]">Policy Knowledge Hub</div>
        </button>

        <div className="hidden items-center gap-10 text-[15px] text-slate-700 md:flex">
          <button onClick={() => onNavigate('home')} className="font-medium text-slate-900">
            Home
          </button>
          <button>Topics</button>
          <button>My Subscriptions</button>
          <button>About Us</button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden w-[430px] lg:block">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-[12px] border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none"
              placeholder="Search policies, summaries, or keywords..."
            />
          </div>
          <Bell className="h-5 w-5 text-slate-700" />
          <div className="flex items-center gap-2 rounded-full bg-white px-2 py-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm">👩</div>
            <span className="hidden text-sm font-medium md:inline">Emma Schneider</span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </div>
          <Menu className="h-5 w-5 text-slate-700 md:hidden" />
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[18px] font-semibold text-[#173b84]">{children}</h2>;
}

function HomePage({ onOpenPolicy }: { onOpenPolicy: () => void }) {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 md:px-6">
      <div className="overflow-hidden rounded-[14px] border border-slate-200 bg-[#eef3ff]">
        <div className="grid grid-cols-1 gap-8 px-12 py-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-[56px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#173b84]">
              Evidence. Discussion. Impact.
            </h1>
            <p className="mb-2 text-[19px] leading-8 text-slate-700">
              Stay informed on policy initiatives that matter.
            </p>
            <p className="mb-8 text-[19px] leading-8 text-slate-700">
              Access research summaries and join discussions with relevant stakeholders.
            </p>
            <div className="flex gap-4">
              <button className="rounded-[10px] bg-[#f58a1f] px-7 py-4 text-[15px] font-semibold text-white shadow-sm">
                Browse All Policies
              </button>
              <button className="rounded-[10px] border border-slate-200 bg-white px-7 py-4 text-[15px] font-semibold text-slate-700">
                My Subscriptions
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-[18px] bg-gradient-to-br from-[#eef3ff] to-[#dfe8fb] p-6 text-center text-[#173b84]">
            <div>
              <div className="mb-4 text-7xl">🏛️💬</div>
              <div className="text-lg font-medium">
                Policy communities connect research and stakeholder discussion
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-[240px_minmax(0,1fr)_250px]">
        <div className="rounded-[14px] border border-slate-200 bg-white p-4">
          <SectionTitle>Browse Policies by Category</SectionTitle>
          <div className="mt-4 space-y-2 text-sm">
            {[
              'All Categories',
              'Environment',
              'Fiscal Policy',
              'Education',
              'Digital Governance',
              'Health',
              'Transport',
              'Social Welfare',
              'Agriculture & Food',
              'Energy',
            ].map((x, i) => (
              <div
                key={x}
                className={`flex items-center justify-between rounded-[10px] px-3 py-3 ${
                  x === 'All Categories' ? 'bg-[#edf4ff] text-[#2953a5]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{x}</span>
                <span className="text-slate-400">{[128, 24, 18, 16, 15, 14, 12, 9, 7, 6][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(homePolicies).map(([category, items]) => (
            <div key={category}>
              <div className="mb-4 flex items-center justify-between">
                <SectionTitle>{category}</SectionTitle>
                <button className="text-sm font-medium text-[#2953a5]">View all</button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                  >
                    <div className="mb-3 text-xs font-medium text-orange-500">{item.badge}</div>
                    <button
                      onClick={item.active ? onOpenPolicy : undefined}
                      className="mb-3 block min-h-[64px] text-left text-[18px] font-semibold leading-snug text-[#173b84] hover:underline"
                    >
                      {item.title}
                    </button>
                    <p className="mb-4 min-h-[72px] text-sm leading-6 text-slate-600">{item.meta}</p>
                    <div className="mb-4 flex gap-4 text-sm text-slate-500">
                      <span>💬 {item.stats[0]}</span>
                      <span>📄 {item.stats[1]}</span>
                      <span>👥 {item.stats[2]}</span>
                    </div>
                    <button
                      onClick={item.active ? onOpenPolicy : undefined}
                      className="w-full rounded-[8px] bg-[#f58a1f] px-4 py-3 text-sm font-semibold text-white"
                    >
                      Subscribe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="rounded-[14px] border border-slate-200 bg-white p-5">
            <div className="mb-4 text-[18px] font-semibold text-[#173b84]">Why Subscribe?</div>
            <div className="space-y-4 text-sm leading-6 text-slate-600">
              <p>Get notified about new research summaries and updates.</p>
              <p>Join discussions with relevant stakeholders.</p>
              <p>Stay informed on policy developments that impact your work.</p>
            </div>
            <button className="mt-5 w-full rounded-[8px] bg-[#f58a1f] px-4 py-3 text-sm font-semibold text-white">
              Learn More
            </button>
          </div>
          <div className="rounded-[14px] border border-slate-200 bg-white p-5">
            <div className="mb-4 text-[18px] font-semibold text-[#173b84]">Trending Policies</div>
            <ol className="space-y-4 text-sm text-slate-700">
              <li>1. NRW Railway Solar Programme</li>
              <li>2. Children&apos;s Privacy Protection Act Revision</li>
              <li>3. EU Nature Restoration Law</li>
              <li>4. EU AI Act Implementation</li>
              <li>5. Carbon Border Adjustment Mechanism</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  active,
  icon,
  label,
  count,
}: {
  active?: boolean;
  icon: React.ReactNode;
  label: string;
  count?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-[12px] px-4 py-3 ${
        active ? 'bg-[#eef4ff] text-[#2953a5]' : 'text-slate-700 hover:bg-slate-50'
      }`}
    >
      <div className="flex items-center gap-3 text-sm font-medium">
        {icon}
        {label}
      </div>
      {count ? <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{count}</span> : null}
    </div>
  );
}

function PolicyPage({ onOpenArticle }: { onOpenArticle: () => void }) {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 md:px-6">
      <div className="mb-4 text-sm text-slate-500">
        Home &gt; Digital Governance &gt; Children&apos;s Privacy Protection Act Revision
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[190px_minmax(0,1fr)]">
        <div className="overflow-hidden rounded-[14px] border border-slate-200 bg-white">
          <div className="flex h-[170px] items-center justify-center bg-[#dfe8fb] text-6xl">🔐</div>
        </div>
        <div className="rounded-[14px] border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <h1 className="mb-3 text-[46px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#173b84]">
                Children&apos;s Privacy Protection Act Revision
              </h1>
              <p className="mb-5 text-[19px] text-slate-700">
                Reviewing and modernizing laws to better protect children&apos;s personal data in the digital age.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {['Digital Governance', 'Consultation Phase', 'Germany', '12 relevant groups'].map((x) => (
                  <div
                    key={x}
                    className="rounded-[10px] border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-700"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 xl:min-w-[430px]">
              <div className="flex gap-3">
                <button className="rounded-[10px] border border-orange-300 px-5 py-3 text-sm font-semibold text-orange-600">
                  ✓ Followed
                </button>
                <button className="rounded-[10px] border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
                  <Share2 className="mr-2 inline h-4 w-4" />
                  Share
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 rounded-[14px] border border-slate-200 p-5 text-center">
                <div>
                  <div className="text-5xl font-semibold text-[#f58a1f]">124</div>
                  <div className="text-sm text-slate-600">Discussions</div>
                </div>
                <div>
                  <div className="text-5xl font-semibold text-[#2953a5]">17</div>
                  <div className="text-sm text-slate-600">Research Summaries</div>
                </div>
                <div>
                  <div className="text-5xl font-semibold text-[#173b84]">356</div>
                  <div className="text-sm text-slate-600">Subscribers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[220px_minmax(0,1fr)_430px]">
        <div className="space-y-2 rounded-[14px] border border-slate-200 bg-white p-4">
          <SidebarItem active icon={<Home className="h-4 w-4" />} label="Overview" />
          <div className="px-3 pt-3 text-xs uppercase tracking-wide text-slate-400">Content</div>
          <SidebarItem active icon={<FileText className="h-4 w-4" />} label="Research Summaries" />
          <SidebarItem icon={<FileText className="h-4 w-4" />} label="Key Documents" />
          <SidebarItem icon={<Clock3 className="h-4 w-4" />} label="Policy Timeline" />
          <div className="px-3 pt-3 text-xs uppercase tracking-wide text-slate-400">Engagement</div>
          <SidebarItem icon={<MessageCircle className="h-4 w-4" />} label="Discussion" count="124" />
          <SidebarItem icon={<Users className="h-4 w-4" />} label="Stakeholders" count="12" />
          <SidebarItem icon={<Users className="h-4 w-4" />} label="Subscribers" count="356" />
          <div className="mt-4 rounded-[14px] border border-slate-200 bg-[#fbfcff] p-4">
            <div className="mb-2 text-sm font-semibold text-[#173b84]">Get updates on this policy</div>
            <p className="mb-4 text-sm text-slate-600">
              You will receive a digest when new research or discussion is added.
            </p>
            <button className="w-full rounded-[8px] bg-[#f58a1f] px-4 py-3 text-sm font-semibold text-white">
              Manage Notifications
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle>Research Summaries</SectionTitle>
            <div className="text-sm text-slate-500">
              Sort by: <span className="font-medium text-slate-700">Latest</span>
            </div>
          </div>
          {researchSummaries.map((item) => (
            <div
              key={item.id}
              className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
            >
              <div className="flex gap-4">
                <div className="flex h-32 w-36 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#dfe8fb] text-5xl">
                  {item.image}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 text-xs font-medium text-orange-500">{item.badge}</div>
                  <button
                    onClick={item.id === 'apps' ? onOpenArticle : undefined}
                    className="mb-2 text-left text-[22px] font-semibold leading-snug text-[#173b84] hover:underline"
                  >
                    {item.title}
                  </button>
                  <div className="mb-2 text-sm text-slate-500">
                    {item.author}
                    {item.org ? ` | ${item.org}` : ''} | {item.date}
                  </div>
                  <p className="mb-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs text-[#2953a5]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="w-full rounded-[14px] border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-[#2953a5]">
            Load More Summaries
          </button>
        </div>

        <CommentColumn />
      </div>
    </div>
  );
}

function CommentColumn() {
  return (
    <div className="sticky top-6 h-fit rounded-[14px] border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div className="text-[18px] font-semibold text-[#f58a1f]">Policy Discussion</div>
        <button className="rounded-[8px] border border-slate-200 px-3 py-2 text-sm text-slate-700">
          Most recent
        </button>
      </div>
      <div className="p-5">
        {comments.map((c) => (
          <div key={c.name} className="border-b border-slate-200 py-4 last:border-b-0">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200">👤</div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="font-semibold text-slate-900">{c.name}</div>
                    <span className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs text-[#2953a5]">{c.role}</span>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-700">{c.text}</div>
                  <div className="mt-3 flex items-center gap-4 text-sm text-[#2953a5]">
                    <button className="font-medium">Reply</button>
                    <button className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" /> {c.likes}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span>{c.time}</span>
                <MoreVertical className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4 flex gap-3 rounded-[12px] border border-slate-200 p-3">
          <input className="flex-1 outline-none" placeholder="Write a comment..." />
          <button className="rounded-[8px] bg-[#f58a1f] px-5 py-2 text-sm font-semibold text-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

function ArticlePage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 md:px-6">
      <div className="mb-4 text-sm text-slate-500">
        Home &gt; Digital Governance &gt; Children&apos;s Privacy Protection Act Revision &gt; Protecting Children&apos;s Data in Educational Apps
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="rounded-[14px] border border-slate-200 bg-white p-8">
          <div className="mb-4 inline-block rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-medium text-[#2953a5]">
            Research Summary
          </div>
          <h1 className="mb-5 text-[48px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#173b84]">
            Protecting Children&apos;s Data in Educational Apps
          </h1>
          <div className="mb-4 flex flex-wrap items-center gap-4 text-slate-500">
            <div className="font-medium text-slate-800">Dr. Anna Müller</div>
            <div>Policy Research Institute</div>
            <div>2 May 2024</div>
            <div>6 min read</div>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {['Data Protection', 'Educational Technology', 'Children’s Rights', 'Privacy Law'].map((tag) => (
              <span key={tag} className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs text-[#2953a5]">
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-8 flex gap-3">
            <button className="rounded-[10px] border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
              <Share2 className="mr-2 inline h-4 w-4" />Share
            </button>
            <button className="rounded-[10px] border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
              <Save className="mr-2 inline h-4 w-4" />Save
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="space-y-8 text-[17px] leading-8 text-slate-700">
              <section>
                <h2 className="mb-3 text-[26px] font-semibold text-[#173b84]">1. Introduction</h2>
                <p>
                  Educational apps increasingly collect and process personal data from children, ranging from basic identifiers to behavioral analytics. While these technologies offer learning benefits, they also raise significant privacy risks. This study examines current practices, identifies key gaps, and proposes policy recommendations to better protect children’s data in digital learning environments.
                </p>
              </section>
              <section>
                <h2 className="mb-3 text-[26px] font-semibold text-[#173b84]">2. Key Findings</h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Extensive Data Collection:</strong> 89% of the top education apps collect personal data beyond what is necessary for core functionality.
                  </li>
                  <li>
                    <strong>Lack of Transparency:</strong> Only 23% of apps provide clear, child-friendly privacy notices.
                  </li>
                  <li>
                    <strong>Third-Party Sharing:</strong> 67% of apps share data with third-party analytics or advertising services.
                  </li>
                  <li>
                    <strong>Inadequate Consent Mechanisms:</strong> Parental consent is often difficult to obtain or easy to bypass.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="mb-3 text-[26px] font-semibold text-[#173b84]">3. Policy Implications</h2>
                <p>
                  To ensure children’s privacy is protected in educational technologies, lawmakers should consider stricter data minimization requirements, clear consent frameworks, and regular privacy audits. Age-appropriate design standards and stronger enforcement mechanisms are also essential.
                </p>
              </section>
              <section>
                <h2 className="mb-3 text-[26px] font-semibold text-[#173b84]">4. Recommendations</h2>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>Mandate data minimization and purpose limitation for educational apps.</li>
                  <li>Require clear, concise, and age-appropriate privacy notices.</li>
                  <li>Establish standardized parental consent mechanisms across platforms.</li>
                  <li>Prohibit the use of children&apos;s data for advertising and profiling.</li>
                  <li>Conduct regular audits and publish compliance results.</li>
                </ol>
              </section>
              <section>
                <h2 className="mb-3 text-[26px] font-semibold text-[#173b84]">5. References</h2>
                <ul className="list-disc space-y-2 pl-6 text-sm">
                  <li>European Data Protection Board (2023). Guidelines on Children&apos;s Data.</li>
                  <li>Livingstone, S., & Third, A. (2022). Children&apos;s Data and Privacy Online.</li>
                  <li>OECD (2021). Protecting Children in the Digital Age.</li>
                </ul>
              </section>
            </div>
            <div className="space-y-4">
              <div className="rounded-[14px] border border-slate-200 p-5">
                <div className="mb-3 text-[20px] font-semibold text-[#173b84]">About the Author</div>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-200">👩</div>
                <div className="mb-2 font-semibold">Dr. Anna Müller</div>
                <p className="text-sm leading-6 text-slate-600">
                  Dr. Anna Müller is a senior researcher focusing on digital rights and data governance. She has advised governments and international organizations on privacy and technology policy.
                </p>
              </div>
              <div className="rounded-[14px] border border-slate-200 p-5">
                <div className="mb-3 text-[20px] font-semibold text-[#173b84]">Document Info</div>
                <div className="space-y-3 text-sm text-slate-700">
                  <div>
                    <strong>Published:</strong> 2 May 2024
                  </div>
                  <div>
                    <strong>Read Time:</strong> 6 min
                  </div>
                  <div>
                    <strong>Type:</strong> Research Summary
                  </div>
                  <div>
                    <strong>Language:</strong> English
                  </div>
                </div>
                <button className="mt-5 w-full rounded-[10px] border border-slate-200 px-4 py-3 text-sm font-semibold text-[#2953a5]">
                  <Download className="mr-2 inline h-4 w-4" />Download PDF
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={onBack}
              className="rounded-[10px] border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              <ArrowLeft className="mr-2 inline h-4 w-4" />Back to Summaries
            </button>
            <button className="rounded-[10px] border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
              Next Summary <ArrowRight className="ml-2 inline h-4 w-4" />
            </button>
          </div>
        </div>
        <CommentColumn />
      </div>
    </div>
  );
}

export default function PolicyKnowledgeHubPrototype() {
  const [page, setPage] = useState<'home' | 'policy' | 'article'>('home');

  return (
    <div className="min-h-screen bg-[#fbfcfe] text-slate-900">
      <AppHeader onNavigate={setPage} />
      {page === 'home' && <HomePage onOpenPolicy={() => setPage('policy')} />}
      {page === 'policy' && <PolicyPage onOpenArticle={() => setPage('article')} />}
      {page === 'article' && <ArticlePage onBack={() => setPage('policy')} />}
    </div>
  );
}
