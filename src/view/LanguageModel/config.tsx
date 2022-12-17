import { Tag, Switch, Tooltip, Space } from 'antd';

export const modelColumns = () => [
  {
    title: '/{cmd}',
    dataIndex: 'cmd',
    fixed: 'left',
    width: 120,
    key: 'cmd',
    render: (v: string) => <Tag color="#2a2a2a">/{v}</Tag>
  },
  {
    title: 'Act',
    dataIndex: 'act',
    key: 'act',
    width: 200,
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    width: 150,
    render: (v: string[]) => (
      <span className="chat-prompts-tags">{v?.map(i => <Tag key={i}>{i}</Tag>)}</span>
    ),
  },
  {
    title: 'Enable',
    dataIndex: 'enable',
    key: 'enable',
    width: 80,
    render: (v: boolean = false) => <Switch checked={v} disabled />,
  },
  {
    title: 'Prompt',
    dataIndex: 'prompt',
    key: 'prompt',
    width: 300,
    render: (v: string) => (
      <Tooltip overlayInnerStyle={{ width: 350 }} title={v}><span className="chat-prompts-val">{v}</span></Tooltip>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 120,
    render: (_: any, row: any, actions: any) => (
      <Space size="middle">
        <a onClick={() => actions.setRecord(row, 'edit')}>Edit</a>
        <a onClick={() => actions.setRecord(row, 'delete')}>Delete</a>
      </Space>
    ),
  }
];
