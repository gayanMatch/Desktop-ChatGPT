import { useState } from 'react';
import { Space, Popconfirm } from 'antd';
import { path, shell } from '@tauri-apps/api';

import { EditRow } from '@/hooks/useColumns';

import useInit from '@/hooks/useInit';
import { fmtDate, chatRoot } from '@/utils';

export const notesColumns = () => [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: 'left',
    key: 'name',
    width: 240,
    render: (_: string, row: any, actions: any) => (
      <EditRow rowKey="name" row={row} actions={actions} />
    ),
  },
  {
    title: 'Path',
    dataIndex: 'path',
    key: 'path',
    width: 200,
    render: (_: string, row: any) => <RenderPath row={row} />,
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    width: 150,
    render: fmtDate,
  },
  {
    title: 'Action',
    fixed: 'right',
    width: 160,
    render: (_: any, row: any, actions: any) => {
      return (
        <Space>
          <a onClick={() => actions.setRecord(row, 'preview')}>Preview</a>
          <a onClick={() => actions.setRecord(row, 'edit')}>Edit</a>
          <Popconfirm
            title="Are you sure to delete this file?"
            onConfirm={() => actions.setRecord(row, 'delete')}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      )
    }
  }
];

const RenderPath = ({ row }: any) => {
  const [filePath, setFilePath] = useState('');
  useInit(async () => {
      setFilePath(await getPath(row));
  })
  return <a onClick={() => shell.open(filePath)}>{filePath}</a>;
};

export const getPath = async (row: any) => {
  const isImg = ['png'].includes(row?.ext);
  return await path.join(await chatRoot(), 'notes', row.id) + `.${row.ext}`;
}
