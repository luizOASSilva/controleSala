import dayjs, { ConfigType } from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

export type ShiftProps = 'Manhã' | 'Noite';

const dateUtils = {
  getDayOfWeekNumber(date?: ConfigType): number {
    return dayjs(date).day();
  },

  getDayOfWeekName(date?: ConfigType) : string {
    return dayjs(date).format('dddd')
  },

  getShiftByHours(date?: ConfigType): ShiftProps {
    const shifts: { name: ShiftProps; ini: number; end: number }[] = [
      { name: 'Manhã', ini: 0, end: 14 },
      { name: 'Noite', ini: 15, end: 23 }
    ];

    const hour = dayjs(date).hour();

    const shift = shifts.find(({ ini, end }) => hour >= ini && hour <= end);

    return shift?.name ?? 'Manhã';
  }
};

export default dateUtils;
