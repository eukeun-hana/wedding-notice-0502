import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"
import CopyIcon from "../../icons/heart-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()

  const copyAccount = (account: string) => {
    navigator.clipboard.writeText(account)
    alert(`계좌번호가 복사되었습니다.\n${account}`)
  }

  // ⭐ 계좌 모달 열기 함수 추가
  const openAccountModal = () => {
    openModal({
      className: "contact-modal", // 기존 CSS 그대로 사용
      closeOnClickBackground: true,

      header: (
        <div className="title-group">
          <div className="title">마음 전하실 곳</div>
          <div className="subtitle">
            계좌번호를 복사하여 마음을 전하실 수 있습니다.
          </div>
        </div>
      ),

      content: (
        <>
          {/* ⭐ 신랑측 계좌 */}
          <div className="contact-info">
            {GROOM_INFO.filter(({ account }) => !!account).map(
              ({ relation, name, account }) => (
                <Fragment key={relation}>
                  <div className="relation">{relation}</div>
                  <div>{name}</div>
                  <div>
                    <Button
                      onClick={() => copyAccount(account)}
                    >
                      복사
                    </Button>
                  </div>
                </Fragment>
              ),
            )}
          </div>

          {/* ⭐ 신부측 계좌 */}
          <div className="contact-info">
            {BRIDE_INFO.filter(({ account }) => !!account).map(
              ({ relation, name, account }) => (
                <Fragment key={relation}>
                  <div className="relation">{relation}</div>
                  <div>{name}</div>
                  <div>
                    <Button
                      onClick={() => copyAccount(account)}
                    >
                      복사
                    </Button>
                  </div>
                </Fragment>
              ),
            )}
          </div>
        </>
      ),

      footer: (
        <Button
          buttonStyle="style2"
          className="bg-light-grey-color text-dark-color"
          onClick={closeModal}
        >
          닫기
        </Button>
      ),
    })
  }
                
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Notice</h2>
      <div className="content">함께하는 여덟 번째 봄에</div>
      <div className="content">서로의 인생을 품으려 합니다.</div>
      <div className="break" />
      <div className="content">마땅히 모시고 기쁨을 나눠야 하지만</div>
      <div className="content">양가 부모님과 가족들만 모시고</div>
      <div className="content">소박한 결혼을 하기로 뜻을 모았습니다.</div>
      <div className="break" />
      <div className="content">두 사람이 함께하는 새로운 시작에</div>
      <div className="content">멀리서나마 격려 해주시면</div>
      <div className="content">그 마음 따스히 품고 잘 살겠습니다.</div>

      <div className="break" />

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>
      
      <div className="break" />
      
      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone, account }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />   
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone, account }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
      <div className="break" />
       {/* ⭐ 계좌 모달 버튼 추가 */}
      <Button onClick={openAccountModal}>
        마음 전하실 곳
      </Button>
    </LazyDiv>
  )
}
