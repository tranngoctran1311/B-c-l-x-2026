export interface LuckyMoneyResult {
  wish: string;
  code: string;
  amount: string;
}

export enum AppState {
  IDLE = 'IDLE',
  GENERATING_MASCOT = 'GENERATING_MASCOT',
  GENERATING_WISH = 'GENERATING_WISH',
  SHOWING_RESULT = 'SHOWING_RESULT',
  ERROR = 'ERROR'
}
