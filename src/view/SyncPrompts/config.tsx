import { Tag } from 'antd';

export const genCmd = (act: string) => act.replace(/\s+|\/+/g, '_').replace(/[^\d\w]/g, '').toLocaleLowerCase();

export const modelColumns = () => [
  {
    title: '/{cmd}',
    dataIndex: 'cmd',
    fixed: 'left',
    // width: 120,
    key: 'cmd',
    render: (_: string, row: Record<string, string>) => (
      <Tag color="#2a2a2a">/{genCmd(row.act)}</Tag>
    ),
  },
  {
    title: 'Act',
    dataIndex: 'act',
    key: 'act',
    // width: 200,
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    // width: 150,
    render: () => <Tag>chatgpt-prompts</Tag>,
  },
  // {
  //   title: 'Enable',
  //   dataIndex: 'enable',
  //   key: 'enable',
  //   width: 80,
  //   render: (v: boolean = false) => <Switch checked={v} disabled />,
  // },
  {
    title: 'Prompt',
    dataIndex: 'prompt',
    key: 'prompt',
    // width: 300,
    // render: (v: string) => (
    //   <Tooltip overlayInnerStyle={{ width: 350 }} title={v}><span className="chat-prompts-val">{v}</span></Tooltip>
    // ),
  },
];
