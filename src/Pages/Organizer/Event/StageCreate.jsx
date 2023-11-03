import React, { useState } from "react";
import HeaderUser from "../../../partials/HeaderUser";
import SidebarSimplified from "../../../partials/SidebarSimplified";
import EventMenu from "../../../partials/EventMenu";
import axios from "axios";
import config from "../../../config";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Input from "../../../components/Input";
import { Dropdown, Option } from "../../../components/Dropdown";

const EventStageCreate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const labelStyle = {fontSize: 14,fontWeight: 600,color: '#212121',marginTop: 20};

    const [vBroadcast, setVBroadcast] = useState('Youtube');
    const broadcastOpt = ['Youtube', 'Zoom', 'Google Meet'];

    const submit = () => {
        let formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);

        axios.post(`${config.baseUrl}/api`)
        .then(response => {
            let res = response.data;
        })
    }

    return (
        <>
            <HeaderUser expand={true} />
            <SidebarSimplified />
            <EventMenu active={'stage'} />
            <div className="content organizer">
                <div style={labelStyle}>Nama Stage</div>
                <Input value={name} onInput={e => setName(e.currentTarget.value)} />
                <div style={{...labelStyle, marginBottom: 15}}>Deskripsi Stage</div>
                <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={(event, editor) => {
                        const dt = editor.getData();
                        setDescription(dt);
                    }}
                />

                <div style={{...labelStyle, marginBottom: 15}}>Virtual Broadcast (opsional)</div>
                <Dropdown value={vBroadcast}>
                    {
                        broadcastOpt.map((opt, o) => (
                            <Option key={o}>{opt}</Option>
                        ))
                    }
                </Dropdown>
            </div>
        </>
    )
}

export default EventStageCreate;