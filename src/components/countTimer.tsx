import useTimer from '../hooks/useTimer';

import TimerBoxComp from './countTimerBox';

function TimerComp() {
  const countdownTimer = useTimer();

  return (
    <div className="grid grid-cols-2 auto-rows-max gap-8 md:grid-cols-4">
      <TimerBoxComp value={countdownTimer.countdownDays} label="days" />
      <TimerBoxComp value={countdownTimer.countdownHours} label="hours" />
      <TimerBoxComp value={countdownTimer.countdownMinutes} label="minutes" />
      <TimerBoxComp value={countdownTimer.countdownSeconds} label="seconds" />
    </div>
  )
}

export default TimerComp;