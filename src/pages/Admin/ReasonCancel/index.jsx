import { useState } from 'react';

import './reasonCancel.scss';
import Data from './Data';
import ReasonCancelHead from './ReasonCancelHead';

function ReasonCancelPage() {
    const [reasonCancellationIds, setReasonCancellationIds] = useState([]);

    const [params, setParams] = useState({
        page: 1,
        size: 5,
    });
    return (
        <div className="cancel-reason-container">
            <ReasonCancelHead params={params} reasonCancellationIds={reasonCancellationIds} />
            <Data
                params={params}
                setParams={setParams}
                setReasonCancellationIds={setReasonCancellationIds}
            />
        </div>
    );
}

export default ReasonCancelPage;
