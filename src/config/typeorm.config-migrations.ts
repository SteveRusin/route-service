import { DataSource, DataSourceOptions } from 'typeorm';

import { TYPEORM_CONFIG } from './typeorm.config';

const dataSource = new DataSource(TYPEORM_CONFIG as DataSourceOptions);

export default dataSource;
