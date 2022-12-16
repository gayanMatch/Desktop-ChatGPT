import { useState, useRef, useEffect } from 'react';
import { Table, Button, Modal } from 'antd';
import { invoke } from '@tauri-apps/api';

import useChatModel from '@/hooks/useChatModel';
import useColumns from '@/hooks/useColumns';
import useData from '@/hooks/useData';
import { chatModelPath } from '@/utils';
import { modelColumns } from './config';
import LanguageModelForm from './Form';
import './index.scss';

export default function LanguageModel() {
  const [isVisible, setVisible] = useState(false);
  const [modelPath, setChatModelPath] = useState('');
  const { modelData, modelSet } = useChatModel();
  const { opData, opAdd, opRemove, opReplace, opSafeKey } = useData(modelData);
  const { columns, ...opInfo } = useColumns(modelColumns());
  const formRef = useRef<any>(null);

  useEffect(() => {
    if (!opInfo.opType) return;
    if (['edit', 'new'].includes(opInfo.opType)) {
      setVisible(true);
    }
    if (['delete'].includes(opInfo.opType)) {
      const data = opRemove(opInfo?.opRecord?.[opSafeKey]);
      modelSet(data);
      opInfo.resetRecord();
    }
  }, [opInfo.opType, formRef]);

  const hide = () => {
    setVisible(false);
    opInfo.resetRecord();
  };

  const handleOk = () => {
    formRef.current?.form?.validateFields()
      .then((vals: Record<string, any>) => {
        let data = [];
        switch (opInfo.opType) {
          case 'new': data = opAdd(vals); break;
          case 'edit': data = opReplace(opInfo?.opRecord?.[opSafeKey], vals); break;
          default: break;
        }
        modelSet(data)
        hide();
      })
  };

  const handleOpenFile = async () => {
    const path = await chatModelPath();
    setChatModelPath(path);
    invoke('open_file', { path });
  };

  const modalTitle = `${({ new: 'Create', edit: 'Edit' })[opInfo.opType]} Language Model`;

  return (
    <div>
      <Button className="add-btn" type="primary" onClick={opInfo.opNew}>Add Model</Button>
      <div className="chat-model-path">PATH: <span onClick={handleOpenFile}>{modelPath}</span></div>
      <Table
        key={opInfo.opTime}
        rowKey="cmd"
        columns={columns}
        scroll={{ x: 'auto' }}
        dataSource={opData}
        pagination={{
          hideOnSinglePage: true,
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 5,
          pageSizeOptions: [5, 10, 15, 20],
          showTotal: (total) => <span>Total {total} items</span>,
        }}
      />
      <Modal
        open={isVisible}
        onCancel={hide}
        title={modalTitle}
        onOk={handleOk}
        destroyOnClose
        maskClosable={false}
      >
        <LanguageModelForm record={opInfo?.opRecord} ref={formRef} />
      </Modal>
    </div>
  )
}