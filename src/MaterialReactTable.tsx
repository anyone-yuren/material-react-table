import React, { ChangeEvent, FC, MouseEvent, ReactNode } from 'react';
import {
  AlertProps,
  ButtonProps,
  CheckboxProps,
  IconButtonProps,
  LinearProgressProps,
  SkeletonProps,
  TableBodyProps,
  TableCellProps,
  TableContainerProps,
  TableFooterProps,
  TableHeadProps,
  TablePaginationProps,
  TableProps,
  TableRowProps,
  TextFieldProps,
  ToolbarProps,
} from '@mui/material';
import { MaterialReactTableProvider } from './useMRT';
import { MRT_TableContainer } from './table/MRT_TableContainer';
import { MRT_Localization, MRT_DefaultLocalization_EN } from './localization';
import { MRT_Default_Icons, MRT_Icons } from './icons';
import { MRT_FILTER_TYPE } from './enums';
import { defaultFilterFNs } from './filtersFNs';

export type MRT_TableOptions<D extends {} = {}> = {
  columns: MRT_ColumnInterface[];
  data: D[];
  initialState?: Partial<MRT_TableState>;
};

export type MRT_TableInstance<D extends {} = {}> =  {
    columns: (Column<D> & MRT_ColumnInstance<D>)[];
    footerGroups: MRT_HeaderGroup<D>[];
    getToggleAllRowsExpandedProps: () => void;
    headerGroups: MRT_HeaderGroup<D>[];
    page: MRT_Row<D>[];
    resetResizing: () => void;
    rows: MRT_Row<D>[];
    selectedFlatRows: MRT_Row<D>[];
    state: MRT_TableState<D>;
  };

export type MRT_ColumnInterface<D extends {} = {}> =  {
    Edit?: ({
      cell,
      onChange,
    }: {
      cell: MRT_Cell<D>;
      onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    }) => ReactNode;
    Filter?: ({ column }: { column: MRT_HeaderGroup<D> }) => ReactNode;
    Footer?: string;
    Header?: string;
    accessor?: string;
    columns?: MRT_ColumnInterface<D>[];
    disableClickToCopy?: boolean;
    disableColumnActions?: boolean;
    disableColumnHiding?: boolean;
    disableEditing?: boolean;
    disableFilters?: boolean;
    enabledFilterTypes?: (MRT_FILTER_TYPE | string)[];
    filter?: MRT_FilterType | string | FilterType<D>;
    filterSelectOptions?: (string | { text: string; value: string })[];
    muiTableBodyCellCopyButtonProps?:
      | ButtonProps
      | ((cell?: MRT_Cell<D>) => ButtonProps);
    muiTableBodyCellEditTextFieldProps?:
      | TextFieldProps
      | ((cell: MRT_Cell<D>) => TextFieldProps);
    muiTableBodyCellProps?:
      | TableCellProps
      | ((cell: MRT_Cell<D>) => TableCellProps);
    muiTableFooterCellProps?:
      | TableCellProps
      | ((column: Column<D>) => TableCellProps);
    muiTableHeadCellColumnActionsButtonProps?:
      | IconButtonProps
      | ((column: Column<D>) => IconButtonProps);
    muiTableHeadCellFilterTextFieldProps?:
      | TextFieldProps
      | ((column: Column<D>) => TextFieldProps);
    muiTableHeadCellProps?:
      | TableCellProps
      | ((column: Column<D>) => TableCellProps);
    onCellEditChange?: (
      event: ChangeEvent<HTMLInputElement>,
      cell: MRT_Cell<D>,
    ) => void;
    onFilterChange?: (
      event: ChangeEvent<HTMLInputElement>,
      filterValue: any,
    ) => void;
  };

export type MRT_ColumnInstance<D extends {} = {}> =  {
    columns?: MRT_ColumnInstance<D>[];
  };

export type MRT_HeaderGroup<D extends {} = {}> =  {
    headers: MRT_HeaderGroup<D>[];
  };

export type MRT_Row<D extends {} = {}> = Row<D> &
  UseExpandedRowProps<D> &
  UseGroupByRowProps<D> &
  UseRowSelectRowProps<D> &
  UseRowStateRowProps<D> & {
    cells: MRT_Cell<D>[];
  };

export type MRT_Cell<D extends {} = {}, _V = any> = Cell<D> &
  UseGroupByCellProps<D> &
  UseRowStateCellProps<D> & {
    column: MRT_ColumnInstance<D>;
  };

export type MRT_FilterType = MRT_FILTER_TYPE | Function;

export type MRT_TableState<D extends {} = {}> = TableState<D> &
  UseColumnOrderState<D> &
  UseExpandedState<D> &
  UseFiltersState<D> &
  UseGlobalFiltersState<D> &
  UseGroupByState<D> &
  UsePaginationState<D> &
  UseResizeColumnsState<D> &
  UseRowSelectState<D> &
  UseRowStateState<D> &
  UseSortByState<D> & {
    currentEditingRow: MRT_Row<D> | null;
    currentFilterTypes: { [key: string]: MRT_FilterType };
    currentGlobalFilterType: MRT_FilterType;
    densePadding: boolean;
    fullScreen: boolean;
    showFilters: boolean;
    showSearch: boolean;
  };

export type MaterialReactTableProps<D extends {} = {}> = UseTableOptions<D> &
  UseExpandedOptions<D> &
  UseFiltersOptions<D> &
  UseGlobalFiltersOptions<D> &
  UseGroupByOptions<D> &
  UsePaginationOptions<D> &
  UseResizeColumnsOptions<D> &
  UseRowSelectOptions<D> &
  UseRowStateOptions<D> &
  UseSortByOptions<D> &
  MRT_TableOptions<D> & {
    disableColumnActions?: boolean;
    disableColumnHiding?: boolean;
    disableDensePaddingToggle?: boolean;
    disableExpandAll?: boolean;
    disableFullScreenToggle?: boolean;
    disableSelectAll?: boolean;
    disableSubRowTree?: boolean;
    enableClickToCopy?: boolean;
    enableColumnGrouping?: boolean;
    enableColumnResizing?: boolean;
    enableRowActions?: boolean;
    enableRowEditing?: boolean;
    enableRowNumbers?: boolean;
    enableSelection?: boolean;
    enabledGlobalFilterTypes?: (MRT_FILTER_TYPE | string)[];
    filterTypes?: { [key in MRT_FILTER_TYPE]: any };
    hideTableFooter?: boolean;
    hideTableHead?: boolean;
    hideToolbarBottom?: boolean;
    hideToolbarInternalActions?: boolean;
    hideToolbarTop?: boolean;
    icons?: Partial<MRT_Icons>;
    idPrefix?: string;
    isFetching?: boolean;
    isLoading?: boolean;
    localization?: Partial<MRT_Localization>;
    muiLinearProgressProps?:
      | LinearProgressProps
      | ((tableInstance: MRT_TableInstance) => LinearProgressProps);
    muiSearchTextFieldProps?: TextFieldProps;
    muiSelectCheckboxProps?:
      | CheckboxProps
      | ((
          isSelectAll?: boolean,
          row?: MRT_Row<D>,
          tableInstance?: MRT_TableInstance<D>,
        ) => CheckboxProps);
    muiTableBodyCellCopyButtonProps?:
      | ButtonProps
      | ((cell?: MRT_Cell<D>) => ButtonProps);
    muiTableBodyCellEditTextFieldProps?:
      | TextFieldProps
      | ((cell?: MRT_Cell<D>) => TextFieldProps);
    muiTableBodyCellProps?:
      | TableCellProps
      | ((cell?: MRT_Cell<D>) => TableCellProps);
    muiTableBodyCellSkeletonProps?:
      | SkeletonProps
      | ((cell?: MRT_Cell<D>) => SkeletonProps);
    muiTableBodyProps?:
      | TableBodyProps
      | ((tableInstance: MRT_TableInstance<D>) => TableBodyProps);
    muiTableBodyRowProps?: TableRowProps | ((row: MRT_Row<D>) => TableRowProps);
    muiTableContainerProps?:
      | TableContainerProps
      | ((tableInstance: MRT_TableInstance<D>) => TableContainerProps);
    muiTableDetailPanelProps?:
      | TableCellProps
      | ((row: MRT_Row<D>) => TableCellProps);
    muiTableFooterCellProps?:
      | TableCellProps
      | ((column: Column<D>) => TableCellProps);
    muiTableFooterProps?:
      | TableFooterProps
      | ((tableInstance: MRT_TableInstance<D>) => TableFooterProps);
    muiTableFooterRowProps?:
      | TableRowProps
      | ((footerGroup: MRT_HeaderGroup<D>) => TableRowProps);
    muiTableHeadCellColumnActionsButtonProps?:
      | IconButtonProps
      | ((column: Column<D>) => IconButtonProps);
    muiTableHeadCellFilterTextFieldProps?:
      | TextFieldProps
      | ((column: Column<D>) => TextFieldProps);
    muiTableHeadCellProps?:
      | TableCellProps
      | ((column: Column<D>) => TableCellProps);
    muiTableHeadProps?:
      | TableHeadProps
      | ((tableInstance: MRT_TableInstance<D>) => TableHeadProps);
    muiTableHeadRowProps?:
      | TableRowProps
      | ((row: MRT_HeaderGroup<D>) => TableRowProps);
    muiTablePaginationProps?:
      | Partial<TablePaginationProps>
      | ((
          tableInstance: MRT_TableInstance<D>,
        ) => Partial<TablePaginationProps>);
    muiTableProps?:
      | TableProps
      | ((tableInstance: MRT_TableInstance<D>) => TableProps);
    muiTableToolbarAlertBannerProps?:
      | AlertProps
      | ((tableInstance: MRT_TableInstance<D>) => AlertProps);
    muiTableToolbarBottomProps?:
      | ToolbarProps
      | ((tableInstance: MRT_TableInstance<D>) => ToolbarProps);
    muiTableToolbarTopProps?:
      | ToolbarProps
      | ((tableInstance: MRT_TableInstance<D>) => ToolbarProps);
    onCellClick?: (
      event: MouseEvent<HTMLTableCellElement>,
      cell: MRT_Cell<D>,
    ) => void;
    onColumnHide?: (column: Column<D>, hiddenColumns?: string[]) => void;
    onDetailPanelClick?: (
      event: MouseEvent<HTMLTableCellElement>,
      row: MRT_Row<D>,
    ) => void;
    onGlobalFilterChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onRowClick?: (
      event: MouseEvent<HTMLTableRowElement>,
      row: MRT_Row<D>,
    ) => void;
    onRowEditSubmit?: (row: MRT_Row<D>) => Promise<void> | void;
    onRowExpandChange?: (
      event: MouseEvent<HTMLButtonElement>,
      row: MRT_Row<D>,
    ) => void;
    onSelectAllChange?: (
      event: ChangeEvent,
      selectedRows: MRT_Row<D>[],
    ) => void;
    onSelectChange?: (
      event: ChangeEvent,
      row: MRT_Row<D>,
      selectedRows: MRT_Row<D>[],
    ) => void;
    positionActionsColumn?: 'first' | 'last';
    positionPagination?: 'bottom' | 'top' | 'both';
    positionToolbarActions?: 'bottom' | 'top';
    positionToolbarAlertBanner?: 'bottom' | 'top';
    renderDetailPanel?: (row: MRT_Row<D>) => ReactNode;
    renderRowActionMenuItems?: (
      rowData: MRT_Row<D>,
      tableInstance: MRT_TableInstance<D>,
      closeMenu: () => void,
    ) => ReactNode[];
    renderRowActions?: (
      row: MRT_Row<D>,
      tableInstance: MRT_TableInstance<D>,
    ) => ReactNode;
    renderToolbarCustomActions?: (
      tableInstance: MRT_TableInstance<D>,
    ) => ReactNode;
    renderToolbarInternalActions?: (
      tableInstance: MRT_TableInstance<D>,
      {
        MRT_ToggleSearchButton,
        MRT_ToggleFiltersButton,
        MRT_ShowHideColumnsButton,
        MRT_ToggleDensePaddingButton,
        MRT_FullScreenToggleButton,
      }: {
        MRT_ToggleSearchButton: FC<IconButtonProps>;
        MRT_ToggleFiltersButton: FC<IconButtonProps>;
        MRT_ShowHideColumnsButton: FC<IconButtonProps>;
        MRT_ToggleDensePaddingButton: FC<IconButtonProps>;
        MRT_FullScreenToggleButton: FC<IconButtonProps>;
      },
    ) => ReactNode;
  };

export default <D extends {} = {}>({
  defaultColumn = { minWidth: 50, maxWidth: 1000 },
  filterTypes,
  globalFilter = MRT_FILTER_TYPE.BEST_MATCH_FIRST,
  icons,
  localization,
  positionActionsColumn = 'first',
  positionPagination = 'bottom',
  positionToolbarActions = 'top',
  positionToolbarAlertBanner = 'top',
  ...rest
}: MaterialReactTableProps<D>) => (
  <MaterialReactTableProvider
    //@ts-ignore
    defaultColumn={defaultColumn}
    //@ts-ignore
    filterTypes={{ ...defaultFilterFNs, ...filterTypes }}
    //@ts-ignore
    globalFilter={globalFilter}
    icons={{ ...MRT_Default_Icons, ...icons }}
    localization={{ ...MRT_DefaultLocalization_EN, ...localization }}
    positionActionsColumn={positionActionsColumn}
    positionPagination={positionPagination}
    positionToolbarActions={positionToolbarActions}
    positionToolbarAlertBanner={positionToolbarAlertBanner}
    {...rest}
  >
    <MRT_TableContainer />
  </MaterialReactTableProvider>
);
