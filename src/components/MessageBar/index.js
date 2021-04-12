import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ClipIcon } from '@/assets/icons/clip.svg'
import { ReactComponent as SmileIcon } from '@/assets/icons/smile.svg'
import { ReactComponent as MicrophoneIcon } from '@/assets/icons/microphone.svg'
import Input from '@/components/Input'
import Icon from '@/components/Icon'
import Popover from '@/components/Popover'

import StyledMessageBar, { StyledPopoverContent, IconContainer } from './style'

function MessageBar({
  children,
  prefixIcon = ClipIcon,
  icon2 = SmileIcon,
  icon3 = MicrophoneIcon,
  button: MessageButton,
  popoverContent: PopoverContent,
  ...rest
}) {
  const [emojiIconActive, setEmojiIconActive] = useState(false)
  return (
    <StyledMessageBar {...rest}>
      <Input
        placeholder="Please input...."
        prefix={<Icon icon={prefixIcon} />}
        suffix={(
          <IconContainer>
            <Popover
              content={(
                PopoverContent && (
                <StyledPopoverContent>
                  <PopoverContent />
                </StyledPopoverContent>
                )
              )}
              offset={{ x: '-25%' }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={icon2}
                color={emojiIconActive ? undefined : 'rgba(24, 28, 47, 0.3)'}
              />
            </Popover>
            <Icon icon={icon3} />
            <MessageButton />
          </IconContainer>
        )}
      />
    </StyledMessageBar>
  )
}

MessageBar.propTypes = {
  children: PropTypes.any,
  button: PropTypes.any,
  icon2: PropTypes.any,
  prefixIcon: PropTypes.any,
  icon3: PropTypes.any,
  popoverContent: PropTypes.any,
}

export default MessageBar
