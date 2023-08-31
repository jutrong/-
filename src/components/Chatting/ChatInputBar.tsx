import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import iconImage from "../../assets/images/svg/ic-image.svg";
import iconCamera from "../../assets/images/svg/ic-camera.svg";
import * as S from './style/ChatInputBar.style';
import WebAlertModal from './WebAlertModal';
import AppAlertModal from './AppAlertModal';
import { ChatProps } from './ChatBubble';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../App';

type Props = {
    ban: boolean;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    chatMessages: ChatProps[];
    setChatMessages: React.Dispatch<React.SetStateAction<ChatProps[]>>;
}

type UploadImage = {
    file: File;
    // thumbnail: string;
    // type: string;
}


const ChatInputBar = ({ban, message, setMessage, chatMessages, setChatMessages}:Props) => {
    const socket = useContext<Socket | undefined>(SocketContext);
    const [imageFile, setImageFile] = useState<File[]>();
    const maxFileCount = 9;
    const [onAlert, setOnAlert] = useState<boolean>(false);


    const UploadFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        
        if (fileList) {
            let sendFileList = [];
            
            for (let i = 0; i < fileList.length; i++) {
                sendFileList?.push(fileList[i]);
            }
        
            // 업로드할 이미지 개수가 maxFile 값보다 클 경우 slice
            if (fileList && fileList.length > maxFileCount) {
                setOnAlert(true);
                sendFileList = sendFileList.slice(0, maxFileCount);
            } 

            setImageFile(sendFileList);
        }
    }; 
    
    const messageHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const sendMessageHandler = () => {
        const sendMessage = {
            room: 8,
            content: message,
        };

        if (socket) {
            socket.emit("bias", sendMessage);
            setMessage('');
        }        
    }

    const sendMessageEnter = () => {
        sendMessageHandler();
    }

    
    return (
        <>  
            <S.ChatBarWrapper>
                <S.IconWrapper>
                    <label htmlFor="imageFile">
                        <S.ChatIconImage src={iconImage} />   
                    </label>
                    <input 
                        id="imageFile"
                        type="file" 
                        multiple
                        accept="image/*"
                        onChange={UploadFileHandler}
                        style={{display: 'none'}}
                    />
                    <label htmlFor="openCamera">
                        <S.ChatIconImage src={iconCamera} />
                    </label>
                    <input
                        id="openCamera"
                        type="file" 
                        accept="image/*"
                        capture="environment"
                        style={{display: 'none'}}
                        onChange={UploadFileHandler}
                    />
                </S.IconWrapper>
                <S.ChatInputWrapper>
                    <S.ChatInput 
                        placeholder={ban ? '채팅정지 상태입니다.' : '채팅을 입력해주세요'} 
                        disabled={ban} 
                        onChange={messageHandler}
                        onKeyDown={(e) => e.key === "Enter" ? sendMessageEnter() : null}
                        value={message}
                    />
                    <S.ChatInputButton 
                        disabled={ban} 
                        onClick={() => {
                            sendMessageHandler();
                        }}
                    />
                </S.ChatInputWrapper>
            </S.ChatBarWrapper>
            {onAlert ? 
                isBrowser ? 
                    <WebAlertModal
                        setModalOpen={setOnAlert}
                        title="알림"
                        content={`이미지 파일은 최대 ${maxFileCount}개 까지 전송할 수 있습니다.`}
                    />
                    :
                    <AppAlertModal
                        setModalOpen={setOnAlert}
                        title="알림"
                        content={`이미지 파일은 최대 ${maxFileCount}개 까지 전송할 수 있습니다.`}
                    />
                : null
            }
        </>
    )
}

export default ChatInputBar;