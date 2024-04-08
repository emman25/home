
export const calculateCustomProgress = (conditionData: any[]) => {
    const trueCount = conditionData.filter(Boolean).length;
    const percentageMap = { 1: 25, 2: 50, 3: 75, 4: 95, 5: 95 };
    return percentageMap[trueCount] || 0;
};
